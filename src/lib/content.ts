export const developerInfo = {
  name: "Shresth Jindal",
  email: "jindalshresth@gmail.com",
  github: "https://github.com/shresthjindal",
  linkedin: "https://linkedin.com/in/shresthjindal",
};

export interface FeatureItem {
  title: string;
  description: string;
  badge: string;
  category: "Capture" | "Analysis" | "Operations" | "Security";
}

export const featuresList: FeatureItem[] = [
  {
    title: "Ambient Recording",
    description: "Captures natural patient conversation. No manual dictation required.",
    badge: "Recording",
    category: "Capture",
  },
  {
    title: "Medical Transcription",
    description: "Real-time voice parsing optimized for pharmacology and complex anatomy.",
    badge: "Transcription",
    category: "Capture",
  },
  {
    title: "Instant SOAP Drafting",
    description: "Converts visits into structured SOAP draft fields in seconds.",
    badge: "SOAP Notes",
    category: "Analysis",
  },
  {
    title: "Longitudinal History",
    description: "Pulls prior diagnoses and patient background onto a single scrollable timeline.",
    badge: "Timeline",
    category: "Operations",
  },
  {
    title: "Real-time Queue",
    description: "Track active, waiting, and signed-off visits from a single room dashboard.",
    badge: "Visits",
    category: "Operations",
  },
  {
    title: "Visit Summaries",
    description: "Generate patient-friendly instructions and action plans instantly.",
    badge: "Summaries",
    category: "Analysis",
  },
  {
    title: "Prescription Sync",
    description: "Drafts dosage orders directly from verbal consults for fast sign-off.",
    badge: "Prescriptions",
    category: "Analysis",
  },
  {
    title: "Dedicated Storage",
    description: "Isolated database nodes and TLS 1.3 encryption meeting full BAA standards.",
    badge: "Compliance",
    category: "Security",
  },
];

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Ambient Capture",
    description: "Open the app and start recording. Speak naturally with the patient.",
  },
  {
    step: "02",
    title: "AI Analysis",
    description: "Aevomed structures terminology, dosages, and complaints in real-time.",
  },
  {
    step: "03",
    title: "Verify & Sign",
    description: "Review the drafted SOAP note and prescription list on your dashboard.",
  },
  {
    step: "04",
    title: "EHR Export",
    description: "One click syncs the finalized record directly into your EMR system.",
  },
];

export interface SecurityItem {
  title: string;
  description: string;
}

export const securityFeatures: SecurityItem[] = [
  {
    title: "End-to-End Encryption",
    description: "Encrypted audio and note archives using TLS 1.3 and AES-256 standards.",
  },
  {
    title: "Isolated Data Nodes",
    description: "Each clinic operates on separate database sandboxes. Zero overlap.",
  },
  {
    title: "Granular Permissions",
    description: "Set separate view rights for administrators, nurses, and doctors.",
  },
  {
    title: "Immutable Auditing",
    description: "Every file access, modification, or transfer logs signed timestamps.",
  },
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  facility: string;
  timeSaved: string;
  accuracy: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote: "I get home in time for dinner now. No more charting on weekends. The notes are accurate enough that I rarely make edits.",
    author: "Dr. Sarah Lin",
    role: "Family Physician",
    facility: "Metropolitan Care Clinic",
    timeSaved: "Save 2.5 hours daily",
    accuracy: "98% note accuracy",
  },
  {
    quote: "My patients get my full attention now. I don't touch the keyboard once during a consultation. Aevomed handles it.",
    author: "Dr. Marcus Vance",
    role: "Cardiologist",
    facility: "Heart & Vascular Center",
    timeSaved: "Save 15 min per visit",
    accuracy: "99% terminology match",
  },
  {
    quote: "Onboarding took our doctors less than five minutes. The legal and security audits were approved immediately.",
    author: "Elena Rostova",
    role: "Clinical Director",
    facility: "Apex Health Network",
    timeSaved: "30% administrative savings",
    accuracy: "100% HIPAA compliant",
  },
];

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  ctaText: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: 79,
    priceAnnually: 64,
    description: "For independent doctors starting automation.",
    features: [
      "150 consultations / month",
      "Ambient voice capture",
      "Standard SOAP drafting",
      "Longitudinal patient feed",
      "Encrypted cloud storage",
    ],
    ctaText: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    priceMonthly: 199,
    priceAnnually: 159,
    description: "For busy practices needing EHR sync.",
    features: [
      "Unlimited consultations",
      "Advanced medical vocabulary",
      "Custom SOAP templates",
      "Prescription checkers",
      "Multi-device sync",
      "Priority under-1h support",
    ],
    ctaText: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    priceMonthly: 499,
    priceAnnually: 399,
    description: "For medical systems and hospitals.",
    features: [
      "SSO / Active Directory",
      "Direct EMR API integration",
      "Dedicated database nodes",
      "Business Associate Agreement (BAA)",
      "24/7 dedicated phone support",
      "SLA uptime guarantees",
    ],
    ctaText: "Contact Sales",
    highlighted: false,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How accurate is the transcription?",
    answer: "Aevomed achieves a 98.7% accuracy rate. It is trained on clinical vocabularies, complex drug names, and diagnostic terms.",
  },
  {
    question: "Is patient data secure?",
    answer: "Yes. All data is encrypted in transit and at rest. We sign BAAs with all clinics and maintain SOC2 Type II compliance.",
  },
  {
    question: "Can I sync notes to my EMR?",
    answer: "Yes. Finalized SOAP notes export instantly to standard EHR/EMR platforms via our direct API integrations.",
  },
  {
    question: "Does it work in noisy rooms?",
    answer: "Our medical-grade voice engine uses adaptive background filtering to isolate clinical voices even in active environments.",
  },
];
