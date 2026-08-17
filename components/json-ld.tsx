import { buildJsonLdGraph } from '@/lib/schema'

export function JsonLd() {
  const data = buildJsonLdGraph()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
