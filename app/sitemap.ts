import type { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/posts'
import { site } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/experience', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const posts = getPublishedPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...routes, ...posts]
}
