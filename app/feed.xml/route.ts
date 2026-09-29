import { getPublishedPosts } from '@/lib/posts'
import { site } from '@/lib/content'

/** Escape the five characters that are not legal as raw text in XML. */
function xml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function rfc822(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`)
  return Number.isNaN(date.getTime()) ? new Date().toUTCString() : date.toUTCString()
}

export const dynamic = 'force-static'

export function GET(): Response {
  const posts = getPublishedPosts()
  const updated = posts[0] ? rfc822(posts[0].date) : new Date().toUTCString()

  const items = posts
    .map(
      (post) => `    <item>
      <title>${xml(post.title)}</title>
      <link>${site.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${post.slug}</guid>
      <description>${xml(post.summary)}</description>
      <pubDate>${rfc822(post.date)}</pubDate>
${post.tags.map((tag) => `      <category>${xml(tag)}</category>`).join('\n')}
    </item>`,
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(site.name)}</title>
    <link>${site.url}/blog</link>
    <description>Write-ups on detection work, offensive labs, and the tooling I use day to day.</description>
    <language>en-us</language>
    <lastBuildDate>${updated}</lastBuildDate>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
