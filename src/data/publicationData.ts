export interface ProjectPlan {
  id: string;
  planNumber: number;
  name: string;
  subtitle: string;
  pages: number;
  sides: number;
  durationDays: number;
  totalSalary: number;
  advancePercentage: number;
  advanceSalary: number;
  completionSalary: number;
  registrationFee: number;
  pagesPerDay: number;
  estimatedDailyTime: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  features: string[];
}

export const TELEGRAM_CHANNEL_URL = "https://t.me/aaliyabookpublicationn";
export const TELEGRAM_USERNAME = "@aaliyabookpublicationn";

export const PROJECT_PLANS: ProjectPlan[] = [
  {
    id: "plan-1",
    planNumber: 1,
    name: "Starter Scribe Plan",
    subtitle: "Ideal for beginners & part-time writers",
    pages: 50,
    sides: 100,
    durationDays: 7,
    totalSalary: 25000,
    advancePercentage: 70,
    advanceSalary: 17500,
    completionSalary: 7500,
    registrationFee: 500,
    pagesPerDay: 7,
    estimatedDailyTime: "1.5 - 2 Hours / Day",
    features: [
      "50 Ruled Pages (100 Writing Sides)",
      "7 Days Flexible Submission Period",
      "₹17,500 (70%) Advance Payment on Registration",
      "₹7,500 Final Settlement on Work Approval",
      "Standard Literary Transcript Assignment",
      "Digital Scan or Courier Submission Accepted",
      "One-on-One Project Coordinator on Telegram"
    ]
  },
  {
    id: "plan-2",
    planNumber: 2,
    name: "Professional Scribe Plan",
    subtitle: "Most chosen by active home writers & students",
    pages: 80,
    sides: 160,
    durationDays: 10,
    totalSalary: 30000,
    advancePercentage: 70,
    advanceSalary: 21000,
    completionSalary: 9000,
    registrationFee: 699,
    pagesPerDay: 8,
    estimatedDailyTime: "2.5 - 3 Hours / Day",
    isPopular: true,
    features: [
      "80 Ruled Pages (160 Writing Sides)",
      "10 Days Flexible Submission Period",
      "₹21,000 (70%) Advance Payment on Registration",
      "₹9,000 Final Settlement on Work Approval",
      "Academic & Educational Book Manuscript",
      "Free Home Pickup / Express Scan Review",
      "Priority Verification & Instant UPI Clearance"
    ]
  },
  {
    id: "plan-3",
    planNumber: 3,
    name: "Master Scribe Plan",
    subtitle: "Maximum earnings for dedicated writers & speed scribes",
    pages: 100,
    sides: 200,
    durationDays: 15,
    totalSalary: 35000,
    advancePercentage: 70,
    advanceSalary: 24500,
    completionSalary: 10500,
    registrationFee: 999,
    pagesPerDay: 6.7,
    estimatedDailyTime: "3 - 3.5 Hours / Day",
    isBestValue: true,
    features: [
      "100 Ruled Pages (200 Writing Sides)",
      "15 Days Relaxed Submission Window",
      "₹24,500 (70%) Advance Payment on Registration",
      "₹10,500 Final Settlement on Work Approval",
      "Premium Historical & Classical Book Transcription",
      "Special Handwriting Performance Bonus (Up to ₹3,000)",
      "Dedicated Senior Publishing Editor Assistance"
    ]
  }
];

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  highlight: string;
  badge: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: "Select your preferred project plan from our list",
    description: "Choose a plan (50, 80, or 100 pages) based on your daily availability and monthly target earnings. All plans feature guaranteed 70% advance disbursement.",
    highlight: "Flexible 7 to 15 Days duration",
    badge: "Step 01"
  },
  {
    stepNumber: 2,
    title: "Complete the registration process via our official Telegram channel",
    description: "Connect with our onboarding team on Telegram (@aaliyabookpublicationn) to submit your details, choose your assignment manuscript, and lock your slot.",
    highlight: "Instant Telegram Onboarding",
    badge: "Step 02"
  },
  {
    stepNumber: 3,
    title: "Receive 70% advance payment upon successful registration",
    description: "As soon as your registration and verification are completed, ₹17,500 to ₹24,500 is transferred directly to your Bank Account or UPI ID within 2 hours.",
    highlight: "100% Upfront Financial Security",
    badge: "Step 03"
  },
  {
    stepNumber: 4,
    title: "Complete your writing assignment and submit for final approval",
    description: "Write on standard ruled A4 sheets with neat handwriting. Upload high-res mobile camera scans or courier original sheets to receive your remaining 30% balance payment.",
    highlight: "Fast Review & 30% Balance Release",
    badge: "Step 04"
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Payments" | "Work Guidelines" | "Telegram & Support";
}

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "Is this a genuine work-from-home opportunity?",
    answer: "Yes, AAliya Book Publication is a legitimate publication house ensuring transparent work processes, verified agreements, and timely payments. We bridge the gap between traditional handwriting artistry and modern publishing requirements across India."
  },
  {
    category: "Payments",
    question: "How do I receive my salary?",
    answer: "We process payments directly via Bank Transfer (NEFT/IMPS) or UPI (Google Pay, PhonePe, Paytm, BHIM) once the registration and final work submission are verified. 70% is disbursed in advance upon registration, and the remaining 30% balance is released upon work submission approval."
  },
  {
    category: "Payments",
    question: "When exactly is the 70% advance payment credited?",
    answer: "The 70% advance payout (e.g. ₹17,500 for Plan 1, ₹21,000 for Plan 2, ₹24,500 for Plan 3) is processed within 1 to 2 hours of completing your slot registration and verification on our official Telegram channel."
  },
  {
    category: "Work Guidelines",
    question: "What type of handwriting is required? Does it have to be calligraphy?",
    answer: "No calligraphy or cursive expertise is needed! All we require is clean, standard, legible handwriting in English or Hindi that is easy to read. Everyday neat handwriting is 100% acceptable."
  },
  {
    category: "Work Guidelines",
    question: "What paper and pens should I use?",
    answer: "You should use standard A4 size ruled (lined) sheets with normal 1-inch margins. Blue or black ballpoint or gel pens (such as Reynolds, Cello, Pentonic, or Hauser) are recommended for clean, smudge-free writing."
  },
  {
    category: "General",
    question: "Why is there a nominal registration fee?",
    answer: "The nominal registration fee (₹500 for Plan 1, ₹699 for Plan 2, ₹999 for Plan 3) covers physical project kit reservation, digital manuscript copyright allotment, and dedication of a personal Telegram project coordinator. This also prevents non-serious reservations and spam registrations."
  },
  {
    category: "Telegram & Support",
    question: "How do I start and register right now?",
    answer: "Simply click the 'Join Official Telegram' button or open https://t.me/aaliyabookpublicationn in Telegram. Send a message with your selected plan name, and our coordinator will guide you step-by-step through the 5-minute onboarding."
  },
  {
    category: "Work Guidelines",
    question: "How do I submit my completed pages?",
    answer: "You have two easy submission modes: 1) Digital Scan: Capture crisp photos using mobile apps like CamScanner or Adobe Scan and upload PDF to Telegram. 2) Courier Submission: We arrange free doorstep pickup via courier partners (Delhivery / India Post) for physical paper submissions."
  },
  {
    category: "General",
    question: "Can students, housewives, or working professionals apply?",
    answer: "Yes, our projects are open to anyone aged 18+ across all Indian states and Union Territories. Since the daily work takes only 1.5 to 3 hours, you can work at your own convenient time (morning, evening, or night)."
  }
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  plan: string;
  earned: string;
  avatarText: string;
  quote: string;
  date: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Sunita Sharma",
    location: "Jaipur, Rajasthan",
    plan: "Plan 2 (80 Pages)",
    earned: "₹30,000 Payout Received",
    avatarText: "SS",
    quote: "Being a homemaker, this has given me true financial independence. The 70% advance of ₹21,000 arrived in my GPay within 90 minutes of Telegram registration. Completed 80 pages in 9 days with neat writing.",
    date: "August 2026",
    verified: true
  },
  {
    id: "t-2",
    name: "Rahul Deshmukh",
    location: "Pune, Maharashtra",
    plan: "Plan 3 (100 Pages)",
    earned: "₹35,000 + ₹2,000 Bonus",
    avatarText: "RD",
    quote: "I am a college student. I spent 3 hours every evening after lectures copying the literary manuscript. The instructions were crystal clear on Telegram, and payments were 100% punctual.",
    date: "July 2026",
    verified: true
  },
  {
    id: "t-3",
    name: "Ananya Mukherjee",
    location: "Kolkata, West Bengal",
    plan: "Plan 1 (50 Pages)",
    earned: "₹25,000 Payout Received",
    avatarText: "AM",
    quote: "I was skeptical at first, but AAliya Book Publication's team verified everything transparently. The ₹17,500 advance gave me total confidence. Have already booked my 3rd consecutive batch!",
    date: "August 2026",
    verified: true
  }
];

export const LIVE_ACTIVITY = [
  { name: "Priya V.", city: "Lucknow", action: "Received ₹17,500 (70% Advance)", time: "4 mins ago" },
  { name: "Amit K.", city: "Delhi NCR", action: "Submitted 80 Pages (Plan 2 Approval)", time: "12 mins ago" },
  { name: "Kavita N.", city: "Bengaluru", action: "Registered for Master Scribe Plan", time: "18 mins ago" },
  { name: "Rajesh S.", city: "Patna", action: "Received ₹24,500 Advance via UPI", time: "25 mins ago" },
  { name: "Deepika M.", city: "Chandigarh", action: "Received Final Settlement ₹9,000", time: "34 mins ago" }
];
