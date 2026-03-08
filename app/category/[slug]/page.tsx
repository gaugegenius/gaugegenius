import { calculators } from "@/data/calculators"
import ToolCard from "@/components/cards/ToolCard"

type Props = {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: Props) {

  const filteredTools = calculators.filter(
    (tool) => tool.category === params.slug
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-3xl font-bold mb-10 capitalize">
        {params.slug} Calculators
      </h1>

      {filteredTools.length === 0 ? (
        <p className="text-gray-500">No calculators found.</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-6">

          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.slug}
              title={tool.name}
              description={tool.description}
              slug={tool.slug}
            />
          ))}

        </div>
      )}

    </div>
  )
}