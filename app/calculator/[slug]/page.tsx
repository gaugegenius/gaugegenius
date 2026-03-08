import { calculators } from "@/data/calculators"
import { notFound } from "next/navigation"

import { calculatorComponents } from "@/components/calculators/calculatorLoader"
import SEOContent from "@/components/SEOContent"
import FAQSection from "@/components/FAQSection"
import RelatedCalculators from "@/components/RelatedCalculators"

export async function generateMetadata({ params }) {

  const calculator = calculators.find(
    tool => tool.slug === params.slug
  )

  if (!calculator) {
    return {
      title: "Calculator | GaugeGenius"
    }
  }

  return {
    title: `${calculator.name} | GaugeGenius`,
    description: calculator.description
  }
}

export default function CalculatorPage({ params }) {

  const calculator = calculators.find(
    tool => tool.slug === params.slug
  )

  if (!calculator) {
    notFound()
  }

  const CalculatorComponent = calculatorComponents[calculator.slug]

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        {calculator.name}
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-10">
        {calculator.description}
      </p>

      {/* Calculator Tool */}
      <div className="bg-white border rounded-xl p-8 shadow-sm mb-16">

        {CalculatorComponent ? (
          <CalculatorComponent />
        ) : (
          <p className="text-gray-500">
            Calculator not implemented yet.
          </p>
        )}

      </div>

      {/* SEO Content */}
      {calculator.seo && (
        <SEOContent
          title={calculator.name}
          seo={calculator.seo}
        />
      )}

      {/* FAQ Section */}
      {calculator.seo?.faq && (
        <FAQSection faq={calculator.seo.faq} />
      )}

      {/* Related Calculators */}
      <RelatedCalculators
        currentSlug={calculator.slug}
        currentTags={calculator.tags}
        />

    </div>
  )
}