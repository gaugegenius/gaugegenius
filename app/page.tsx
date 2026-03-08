import { calculators } from "@/data/calculators"
import { categories } from "@/data/categories"

import ToolCard from "@/components/cards/ToolCard"
import CategoryCard from "@/components/cards/CategoryCard"

export default function HomePage() {

  const popularTools = calculators
    .filter(tool => tool.popular)
    .slice(0, 6)

  const recentTools = [...calculators]
    .sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      {/* HERO SECTION */}
      <section className="text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Smart Online Calculators for Everyday Use
        </h1>

        <p className="text-gray-600 mb-8">
          Free, accurate calculators for finance, tax, math, and time calculations.
        </p>

        <div className="flex justify-center gap-3">

          <input
            type="text"
            placeholder="Search calculators..."
            className="border rounded-md px-4 py-2 w-80"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Search
          </button>

        </div>

      </section>


      {/* POPULAR CALCULATORS */}
      <section className="mt-20">

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Popular Calculators
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {popularTools.map(tool => (

            <ToolCard
              key={tool.slug}
              title={tool.name}
              description={tool.description}
              slug={tool.slug}
            />

          ))}

        </div>

      </section>


      {/* RECENTLY ADDED */}
      <section className="mt-20">

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Recently Added Tools
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {recentTools.map(tool => (

            <ToolCard
              key={tool.slug}
              title={tool.name}
              description={tool.description}
              slug={tool.slug}
            />

          ))}

        </div>

      </section>


      {/* BROWSE CATEGORIES */}
      <section className="mt-20">

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Browse by Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map(cat => (

            <CategoryCard
              key={cat.slug}
              slug={cat.slug}
              name={cat.name}
              description={cat.description}
            />

          ))}

        </div>

      </section>

    </div>
  )
}