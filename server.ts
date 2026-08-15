import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API route for Gemini AI Assistant
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.json({
        reply: "Welcome to AAliya Book Publication! We offer authentic handwriting work-from-home projects with 70% advance payment. You can choose from Plan 1 (50 pages / ₹25,000), Plan 2 (80 pages / ₹30,000), or Plan 3 (100 pages / ₹35,000). To register, connect via our official Telegram channel: https://t.me/aaliyabookpublicationn.",
        source: "offline_assistant",
      });
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
Assist prospective writers with accurate, professional, reassuring, and concise information.

Company & Opportunity:
- AAliya Book Publication (Est. 2018): We hire individuals across India to transcribe manuscripts and educational books by hand.
- 4-Step Process:
  1. Select Project Plan.
  2. Register via Official Telegram: https://t.me/aaliyabookpublicationn
  3. Receive 70% advance payment via Bank Transfer or UPI immediately upon registration.
  4. Complete writing assignment and submit to receive final 30% balance.

Plans:
- Plan 1: 50 Pages (100 sides) | 7 Days | ₹25,000 Salary (70% Advance: ₹17,500) | Reg Fee: ₹500
- Plan 2: 80 Pages (160 sides) | 10 Days | ₹30,000 Salary (70% Advance: ₹21,000) | Reg Fee: ₹699 (Most Popular)
- Plan 3: 100 Pages (200 sides) | 15 Days | ₹35,000 Salary (70% Advance: ₹24,500) | Reg Fee: ₹999 (Best Value)

Official Telegram Channel: https://t.me/aaliyabookpublicationn`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: `User inquiry: ${message}`,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error('Server Gemini Error:', error);
    res.json({
      reply: "AAliya Book Publication provides authentic work-from-home handwriting jobs with 70% advance payouts. Choose Plan 1 (₹25,000), Plan 2 (₹30,000), or Plan 3 (₹35,000). Please join our official Telegram channel at https://t.me/aaliyabookpublicationn to connect with a coordinator.",
      source: "fallback",
    });
  }
});

// Serve static assets from dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
