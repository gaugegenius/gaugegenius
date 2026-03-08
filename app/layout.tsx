import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "GaugeGenius – Free Online Calculators for Finance, Math, Health & More",
    template: "%s | GaugeGenius",
  },
  description:
    "Use free online calculators for finance, tax, math, time, and health. Fast, accurate tools for everyday calculations on GaugeGenius.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
