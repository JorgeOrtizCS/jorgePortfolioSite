import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { formatDate, getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Field Notes',
  description:
    'Write-ups on detection engineering, home lab infrastructure, and IT operations by Jorge Ortiz.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          <span className="prompt">[</span> 04 / field notes <span className="prompt">]</span>
        </p>
        <h1>
          Notes from
          <br />
          <span>inside the machine.</span>
        </h1>
        <p>
          A working notebook for cybersecurity: detection engineering, home lab infrastructure, and
          the tooling I use day to day. I write these so the next person searching the same error
          message finds an answer.
        </p>
      </header>

      <section className="blog-list" aria-label="Entries">
        {posts.length === 0 ? (
          <p className="empty-state">
            No entries yet. Drop an <code>.mdx</code> file in <code>content/posts</code> and it
            shows up here.
          </p>
        ) : (
          posts.map((post) => {
            const rowContent = (
              <>
                <div className="post-meta">
                  <span>{post.entry}</span>
                  <span>{post.status === 'published' ? formatDate(post.date) : post.status}</span>
                </div>

                <div className="post-main">
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <div className="tag-list">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="post-read">
                  {post.status === 'published' ? (
                    <>
                      {post.readingTime} <ArrowUpRight size={18} aria-hidden="true" />
                    </>
                  ) : (
                    <em>{post.status}</em>
                  )}
                </span>
              </>
            )

            return post.status === 'published' ? (
              <Link className="blog-row" href={`/blog/${post.slug}`} key={post.slug}>
                {rowContent}
              </Link>
            ) : (
              <div className="blog-row is-pending" key={post.slug} aria-disabled="true">
                {rowContent}
              </div>
            )
          })
        )}
      </section>
    </>
  )
}
