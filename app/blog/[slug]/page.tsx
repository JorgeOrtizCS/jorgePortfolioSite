import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { formatDate, getPostBySlug, getPublishedPosts } from '@/lib/posts'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <article className="post">
      <header className="page-header post-header">
        <Link className="inline-link back-link" href="/blog">
          <ArrowLeft size={17} aria-hidden="true" /> all entries
        </Link>

        <p className="eyebrow">
          <span className="prompt">[</span> entry {post.entry} <span className="prompt">]</span>
        </p>

        <h1>{post.title}</h1>

        <div className="post-byline">
          <span>{formatDate(post.date)}</span>
          <span className="dim">·</span>
          <span>{post.readingTime} read</span>
        </div>

        <div className="tag-list">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <div className="prose">
        <MDXRemote source={post.content} />
      </div>

      <footer className="post-footer">
        <Link className="inline-link" href="/blog">
          <ArrowLeft size={17} aria-hidden="true" /> back to field notes
        </Link>
      </footer>
    </article>
  )
}
