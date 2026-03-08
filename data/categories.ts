export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  {
    slug: "finance",
    name: "Finance Calculators",
    description: "Tools for loans, investments, and savings calculations."
  },
  {
    slug: "tax",
    name: "Tax Calculators",
    description: "Calculate taxes such as GST and other deductions."
  },
  {
    slug: "time",
    name: "Time Calculators",
    description: "Date and time calculation tools."
  },
  {
    slug: "math",
    name: "Math Calculators",
    description: "Percentage, BMI, and other math tools."
  }
]