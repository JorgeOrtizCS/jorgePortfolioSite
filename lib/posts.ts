import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export type PostStatus = 'published' | 'drafting' | 'queued'

export type PostMeta = {
  slug: string
  entry: string
  title: string
  date: string
  summary: string
  tags: string[]
  status: PostStatus
  readingTime: string
}

export type Post = PostMeta & { content: string }

function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

function parse(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, '')
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    entry: String(data.entry ?? '000'),
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    summary: String(data.summary ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    status: (data.status as PostStatus) ?? 'queued',
    readingTime: data.readingTime ? String(data.readingTime) : readingTime(content),
    content,
  }
}

const STATUS_ORDER: Record<PostStatus, number> = {
  published: 0,
  drafting: 1,
  queued: 2,
}

/**
 * Every entry. Readable posts come first (newest first), then drafting,
 * then queued, so the list never leads with something nobody can read.
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map(parse)
    .sort(
      (a, b) =>
        STATUS_ORDER[a.status] - STATUS_ORDER[b.status] || b.entry.localeCompare(a.entry),
    )
}

/** Only entries that have a real body and should get their own route. */
export function getPublishedPosts(): Post[] {
  return getAllPosts().filter((post) => post.status === 'published')
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPublishedPosts().find((post) => post.slug === slug)
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const date = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
