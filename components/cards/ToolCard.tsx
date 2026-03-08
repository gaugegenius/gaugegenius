import Link from "next/link"

interface Props {
  title: string
  description: string
  slug: string
}

export default function ToolCard({ title, description, slug }: Props) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>

      <Link
        href={`/calculator/${slug}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        Open Tool
      </Link>

    </div>
  )
}