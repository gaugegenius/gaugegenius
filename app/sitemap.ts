import { calculators } from "@/data/calculators"

export default function sitemap() {

  const baseUrl = "https://gaugegenius.vercel.app/"

  const calculatorPages = calculators.map(tool => ({
    url: `${baseUrl}/calculator/${tool.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...calculatorPages
  ]
}