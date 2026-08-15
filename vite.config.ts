import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import {GoogleGenAI} from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const { message } = JSON.parse(body || '{}');
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                reply: "Welcome to AAliya Book Publication! We offer authentic handwriting work-from-home projects with 70% advance payment. You can choose from Plan 1 (50 pages / ₹25,000), Plan 2 (80 pages / ₹30,000), or Plan 3 (100 pages / ₹35,000). To register, connect via our official Telegram channel: https://t.me/aaliyabookpublicationn.",
                source: "offline_assistant"
              }));
              return;
            }

            const ai = new GoogleGenAI({
              apiKey: apiKey,
              httpOptions: {
                headers: {
                  'User-Agent': 'aistudio-build',
                },
              },
            });

            const systemInstruction = `You are the official AI Support Assistant for AAliya Book Publication (Authentic Handwriting Services & Work From Home Opportunities).
Your goal is to assist prospective writers with accurate, reassuring, professional, and clear information about our work-from-home handwriting projects.

Company & Project Details:
- Organization: AAliya Book Publication (Est. 2018), bridging traditional handwriting artistry and modern digital publication requirements.
- Core Opportunity: Scribing and transcribing book manuscripts, educational notes, and historical literature by hand on standard ruled A4 paper using standard blue or black ballpoint/gel pens.
- 4-Step Process:
  1. Select your preferred project plan (50, 80, or 100 pages).
  2. Complete registration via our official Telegram channel (https://t.me/aaliyabookpublicationn).
  3. Receive 70% advance payment directly in your Bank Account or via UPI upon successful registration.
  4. Complete your writing assignment within the allotted days and submit for final approval & get the remaining 30% balance payment.

Project Plans:
- Project Plan 1: 50 Pages (100 sides) | 7 Days | Total Salary: ₹25,000/- | 70% Advance: ₹17,500/- | Balance: ₹7,500/- | Registration Fee: ₹500/-
- Project Plan 2 (Most Popular): 80 Pages (160 sides) | 10 Days | Total Salary: ₹30,000/- | 70% Advance: ₹21,000/- | Balance: ₹9,000/- | Registration Fee: ₹699/-
- Project Plan 3 (Best Value): 100 Pages (200 sides) | 15 Days | Total Salary: ₹35,000/- | 70% Advance: ₹24,500/- | Balance: ₹10,500/- | Registration Fee: ₹999/-

Payment & Verification:
- Payout methods: Direct Bank Transfer (NEFT/IMPS) or UPI (Google Pay, PhonePe, Paytm).
- Advance Payout: 70% is disbursed immediately after registration verification.
- Submission Options: High-quality mobile camera scan upload via PDF or free courier pickup.
- Official Telegram Channel: https://t.me/aaliyabookpublicationn

Guidelines:
- Writing must be legible and neat.
- Plain ruled A4 paper with normal margins.
- No special calligraphy needed; everyday neat handwriting is accepted.
- Always provide helpful, polite, concise, structured answers. If relevant, remind them to connect with the official Telegram channel (https://t.me/aaliyabookpublicationn) to initiate registration.`;

            const response = await ai.models.generateContent({
              model: 'gemini-3.7-flash',
              contents: `User inquiry: ${message}`,
              config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
              },
            });

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ reply: response.text }));
          } catch (err: any) {
            console.error('Gemini API Error:', err);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              reply: "AAliya Book Publication provides authentic work-from-home handwriting jobs with 70% advance payouts. Choose Plan 1 (₹25,000), Plan 2 (₹30,000), or Plan 3 (₹35,000). Please join our official Telegram channel at https://t.me/aaliyabookpublicationn to connect with a coordinator.",
              error: err?.message,
              source: "fallback"
            }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
