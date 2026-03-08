export interface FAQItem {
  question: string
  answer: string
}

export interface SEOContent {
  intro: string
  howItWorks: string
  formula?: string
  example?: string
  benefits?: string
  faq?: FAQItem[]
}

export interface Calculator {
  slug: string
  name: string
  description: string
  category: "finance" | "tax" | "time" | "math"
  createdAt: string
  updatedAt?: string
  popular?: boolean
  tags?: string[]
  seo?: SEOContent
}

export const calculators: Calculator[] = [

  {
    slug: "age-calculator",
    name: "Age Calculator",
    description: "Calculate your exact age from your date of birth.",
    category: "time",
    createdAt: "2026-03-01",
    popular: true,
    tags: ["age", "birthday", "date", "time"],

    seo: {
      intro:
        "An age calculator helps determine the exact time difference between your birth date and today's date. It can display your age in years, months, and days and even show the total number of days or weeks you have lived.",

      howItWorks:
        "The calculator compares your birth date with the current date and calculates the difference between them. It adjusts the result to account for months with different lengths and leap years.",

      formula:
        "Age = Current Date − Date of Birth",

      example:
        "For example, if someone was born on May 12, 2000 and today's date is March 8, 2026, the calculator determines the exact difference and displays the age in years, months, and days.",

      benefits:
        "Using an online age calculator saves time and ensures accuracy. It eliminates manual calculations and automatically accounts for leap years and varying month lengths.",

      faq: [
        {
          question: "What is chronological age?",
          answer:
            "Chronological age is the exact amount of time a person has lived since birth, typically measured in years, months, and days."
        },
        {
          question: "Can I calculate age in days?",
          answer:
            "Yes. Many age calculators can convert your age into total days, weeks, or months lived."
        }
      ]
    }
  },

  {
    slug: "date-duration-calculator",
    name: "Date Duration Calculator",
    description: "Calculate the duration between two dates.",
    category: "time",
    createdAt: "2026-03-02",
    popular: true,
    tags: ["date", "duration", "time"]
  },

  {
    slug: "emi-calculator",
    name: "EMI Calculator",
    description: "Estimate your monthly loan EMI payment.",
    category: "finance",
    createdAt: "2026-03-03",
    popular: true,
    tags: ["loan", "emi", "finance"]
  },

  {
    slug: "sip-calculator",
    name: "SIP Calculator",
    description: "Plan your SIP investments and future returns.",
    category: "finance",
    createdAt: "2026-03-04",
    tags: ["investment", "sip", "finance"]
  },

  {
    slug: "fd-calculator",
    name: "FD Calculator",
    description: "Calculate fixed deposit returns easily.",
    category: "finance",
    createdAt: "2026-03-05",
    tags: ["fd", "investment", "finance"]
  },

  {
    slug: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate GST amount and total price.",
    category: "tax",
    createdAt: "2026-03-06",
    popular: true,
    tags: ["gst", "tax", "price"]
  },

  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages quickly.",
    category: "math",
    createdAt: "2026-03-07",
    tags: ["percentage", "math"]
  },

  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index.",
    category: "math",
    createdAt: "2026-03-08",
    popular: true,
    tags: ["bmi", "health"]
  },

  {
    slug: "loan-calculator",
    name: "Loan Calculator",
    description: "Estimate loan repayment amount.",
    category: "finance",
    createdAt: "2026-03-09",
    popular: true,
    tags: ["loan", "finance"]
  }

]