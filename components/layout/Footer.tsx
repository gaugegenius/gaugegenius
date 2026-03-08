import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">

      <div className="max-w-7xl mx-auto px-4 py-10 text-center">

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">

          <Link href="/about">About</Link>

          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link href="/terms">Terms</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/sitemap">Sitemap</Link>

        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 GaugeGenius. All rights reserved.
        </p>

      </div>

    </footer>
  );
}