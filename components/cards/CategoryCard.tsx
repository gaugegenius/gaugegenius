import Link from "next/link"

interface Props {
  slug: string
  name: string
  description: string
}

export default function CategoryCard({ slug, name, description }: Props) {
  return (
    <Link
      href={`/category/${slug}`}
      className="block bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold mb-2">
        {name}
      </h3>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </Link>
  )
}