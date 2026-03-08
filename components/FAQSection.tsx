interface FAQItem {
  question: string
  answer: string
}

interface Props {
  faq: FAQItem[]
}

export default function FAQSection({ faq }: Props) {

  return (
    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">

        {faq.map((item, index) => (

          <div
            key={index}
            className="border rounded-lg p-6 bg-white shadow-sm"
          >

            <h3 className="font-semibold text-lg">
              {item.question}
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed">
              {item.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}