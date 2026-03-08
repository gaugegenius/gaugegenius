import Link from "next/link"
import { calculators } from "@/data/calculators"

interface Props {
  currentSlug: string
  currentTags?: string[]
}

export default function RelatedCalculators({ currentSlug, currentTags }: Props) {

  const related = calculators
    .filter(tool => {

      if (tool.slug === currentSlug) return false

      if (!tool.tags || !currentTags) return false

      return tool.tags.some(tag =>
        currentTags.includes(tag)
      )

    })
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-6">
        Related Calculators
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {related.map(tool => (

          <Link
            key={tool.slug}
            href={`/calculator/${tool.slug}`}
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            <h3 className="font-semibold">
              {tool.name}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              {tool.description}
            </p>

          </Link>

        ))}

      </div>

    </section>
  )
}