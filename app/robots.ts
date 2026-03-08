export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gaugegenius.vercel.app/sitemap.xml",
  };
}