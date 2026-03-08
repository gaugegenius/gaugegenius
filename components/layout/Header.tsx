import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white border-b">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">

          <Image
            src="/logo.png"
            alt="GaugeGenius"
            width={200}
            height={60}
          />


        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-gray-700 font-medium">

          <Link href="/">Home</Link>
          <Link href="/calculators">Calculators</Link>
          <Link href="/category">Categories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

        </nav>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search calculators..."
            className="border rounded-md px-3 py-1 text-sm"
          />
        </div>

      </div>

    </header>
  )
}