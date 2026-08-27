import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Gemini AI Chat API
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body || {};

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message text is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      const systemInstruction = `You are the intelligent, helpful, and official AI Support Assistant & Advisor for "AAliya Book Publication" (Authentic Handwriting Services & Work From Home Opportunities across India).

Your main goals:
1. Answer ANY question asked by the user accurately, politely, and clearly in the SAME language the user writes in (Hindi, Hinglish, English, etc.).
2. Provide verified information about AAliya Book Publication's handwriting work-from-home projects, salaries, 70% advance payments, deadlines, and registration.
3. If the user asks general questions, math calculations, writing tips, or any other topic, answer them accurately, intelligently, and helpfully while maintaining a professional, friendly persona.

Official Details of AAliya Book Publication:
- Established: 2018. Certified and trusted publication house.
- Nature of Work: Manuscript & Educational Book hand-writing / transcription from home. No typing required.
- Who Can Apply: Students, homemakers, job seekers, freelancers across all states in India.
- Advance Payment Policy: Instant 70% advance payment transferred to the writer's Bank Account or UPI upon project slot registration on Telegram. The remaining 30% balance is paid immediately upon submission & review of written pages.
- Writing Tools: Single-line ruled A4 sheets with 1-inch margins, standard blue or black ballpoint/gel pen (Cello, Reynolds, Hauser, etc.). Neat, legible handwriting is required (no calligraphy needed).

Available Project Plans:
1. Plan 1 (Standard Starter):
   - Volume: 50 Pages (100 sides)
   - Duration: 7 Days
   - Total Salary: ₹25,000
   - Upfront 70% Advance Payment: ₹17,500
   - Remaining Balance (on completion): ₹7,500
   - One-Time Registration / Kit Fee: ₹500

2. Plan 2 (Premium Pro - Most Popular):
   - Volume: 80 Pages (160 sides)
   - Duration: 10 Days
   - Total Salary: ₹30,000
   - Upfront 70% Advance Payment: ₹21,000
   - Remaining Balance (on completion): ₹9,000
   - One-Time Registration / Kit Fee: ₹699

3. Plan 3 (Master Scholar - Maximum Payout):
   - Volume: 100 Pages (200 sides)
   - Duration: 15 Days
   - Total Salary: ₹35,000
   - Upfront 70% Advance Payment: ₹24,500
   - Remaining Balance (on completion): ₹10,500
   - One-Time Registration / Kit Fee: ₹999

4-Step Registration Process:
1. Step 1: Choose your preferred project plan (Plan 1, 2, or 3).
2. Step 2: Open our official Telegram channel: https://t.me/aaliya_book_publication_official (Handle: @aaliya_book_publication_official).
3. Step 3: Complete verification with our official project manager, claim your 20% Raksha Bandhan fee discount, and receive your 70% advance payment via Bank Transfer / UPI.
4. Step 4: Write your pages within the allotted deadline and submit digital photos/courier to claim your remaining 30% balance.

Special Limited Festival Offer:
- Raksha Bandhan Special: 20% Flat OFF on Registration fees for next 48 Hours. (Plan 1 kit fee is now ₹400 instead of ₹500, Plan 2 is ₹559, Plan 3 is ₹799). 70% Advance payout remains guaranteed.

Contact Details:
- Official Telegram Channel: https://t.me/aaliya_book_publication_official
- Telegram Handle: @aaliya_book_publication_official
- Support Email: officialaaliyabookpublication@gmail.com
- Working Hours: Monday to Saturday, 9:00 AM - 7:00 PM IST

Formatting & Style:
- Use bullet points, bold highlights, and clean formatting for readability.
- Be encouraging, clear, and reassuring.
- When relevant, encourage connecting on Telegram (https://t.me/aaliya_book_publication_official).`;

      if (!apiKey) {
        // Safe contextual response if API key is not yet set
        let offlineReply = "Welcome to AAliya Book Publication! We offer genuine handwriting work-from-home jobs with guaranteed 70% advance payment and 20% Raksha Bandhan Special Registration Discount. You can select Plan 1 (₹25,000), Plan 2 (₹30,000), or Plan 3 (₹35,000). To register and receive your advance payout, please join our official Telegram channel: https://t.me/aaliya_book_publication_official.";
        
        const lower = message.toLowerCase();
        if (lower.includes('rakhi') || lower.includes('raksha') || lower.includes('bandhan') || lower.includes('special') || lower.includes('discount') || lower.includes('20%') || lower.includes('offer')) {
          offlineReply = "💙✨ **Raksha Bandhan Special Offer** ✨💙\n\nIs Raksha Bandhan, AAliya Book Publication de raha hai sabhi registration fees par **FLAT 20% OFF** (48 Hours Special):\n• **Plan 1**: ₹500 ➔ **₹400** (Salary: ₹25,000 | 70% Advance: ₹17,500)\n• **Plan 2**: ₹699 ➔ **₹559** (Salary: ₹30,000 | 70% Advance: ₹21,000)\n• **Plan 3**: ₹999 ➔ **₹799** (Salary: ₹35,000 | 70% Advance: ₹24,500)\n\nSlot book karne ke liye Telegram par judiye: https://t.me/aaliya_book_publication_official";
        } else if (lower.includes('advance') || lower.includes('payment') || lower.includes('salary') || lower.includes('paisa') || lower.includes('rupay')) {
          offlineReply = "AAliya Book Publication ensures that **70% of your total project salary is transferred upfront** to your Bank Account or UPI immediately upon slot booking on Telegram. For example: ₹17,500 advance for Plan 1 (₹25k total), ₹21,000 advance for Plan 2 (₹30k total), and ₹24,500 advance for Plan 3 (₹35k total).";
        } else if (lower.includes('plan') || lower.includes('kaam') || lower.includes('work') || lower.includes('job')) {
          offlineReply = "We offer 3 authentic handwriting project plans with 20% Raksha Bandhan Discount:\n• **Plan 1**: 50 Pages | 7 Days | ₹25,000 Salary (70% Advance: ₹17,500) | Reg Fee: ₹400 (Was ₹500)\n• **Plan 2**: 80 Pages | 10 Days | ₹30,000 Salary (70% Advance: ₹21,000) | Reg Fee: ₹559 (Was ₹699)\n• **Plan 3**: 100 Pages | 15 Days | ₹35,000 Salary (70% Advance: ₹24,500) | Reg Fee: ₹799 (Was ₹999)\n\nTo join, visit our Telegram: https://t.me/aaliya_book_publication_official";
        } else if (lower.includes('telegram') || lower.includes('apply') || lower.includes('register') || lower.includes('join')) {
          offlineReply = "Registration is conducted through our official verified Telegram channel: **https://t.me/aaliya_book_publication_official** (@aaliya_book_publication_official). Simply join the channel and message our coordinator to start your project!";
        }

        return res.json({ reply: offlineReply, source: 'offline_mode' });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
      });

      // Construct formatted multi-turn conversation if provided
      let contentsPayload: any = [];

      if (Array.isArray(history) && history.length > 0) {
        // Map history objects { role: 'user' | 'model', text: string }
        contentsPayload = history.map((item: { role: string; text: string }) => ({
          role: item.role === 'ai' || item.role === 'model' ? 'model' : 'user',
          parts: [{ text: item.text }],
        }));
        // Append current message
        contentsPayload.push({
          role: 'user',
          parts: [{ text: message }],
        });
      } else {
        contentsPayload = [{ role: 'user', parts: [{ text: message }] }];
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: contentsPayload,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Thank you for contacting AAliya Book Publication. For slot registration and advance disbursement, please visit our Telegram channel at https://t.me/aaliyabookpublicationn.";

      res.json({ reply: replyText });
    } catch (error: any) {
      console.error('Gemini API Server Error:', error);
      res.json({
        reply: "AAliya Book Publication provides authentic work-from-home handwriting jobs with 70% advance payouts. Choose Plan 1 (₹25,000), Plan 2 (₹30,000), or Plan 3 (₹35,000). Please join our official Telegram channel at https://t.me/aaliyabookpublicationn to connect with a coordinator.",
        source: 'fallback',
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AAliya Book Publication server running on http://localhost:${PORT}`);
  });
}

startServer();
