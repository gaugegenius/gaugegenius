interface Props {
  title: string
  seo: {
    intro: string
    howItWorks: string
  }
}

export default function SEOContent({ title, seo }: Props) {

  return (
    <div className="mt-16 space-y-10">

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          What is an {title}?
        </h2>

        <p className="text-gray-600">
          {seo.intro}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          How it Works
        </h2>

        <p className="text-gray-600">
          {seo.howItWorks}
        </p>
      </section>

    </div>
  )
}