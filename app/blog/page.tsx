import type { Metadata } from 'next'
import Link from 'next/link'
import { formatDate, getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Write-ups on detection engineering, home lab infrastructure, and IT operations by Jorge Ortiz.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <header className="page-head">
        <span className="label">Blog</span>
        <h1>Notes as I go</h1>
        <p>
          Write-ups on detection work, home lab builds, and the tooling I use day to day. I write
          these so the next person searching the same error message finds an answer.
        </p>
      </header>

      <section className="posts" aria-label="Posts">
        {posts.length === 0 ? (
          <p className="empty">
            No posts yet. Add an <code>.mdx</code> file in <code>content/posts</code>.
          </p>
        ) : (
          posts.map((post) => {
            const body = (
              <>
                <div className="post-top">
                  <span>{post.status === 'published' ? formatDate(post.date) : 'Coming soon'}</span>
                  {post.status === 'published' ? <span>{post.readingTime} read</span> : null}
                </div>

                <h2>{post.title}</h2>
                <p>{post.summary}</p>

                <ul className="chips">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </>
            )

            return post.status === 'published' ? (
              <Link className="post-row" href={`/blog/${post.slug}`} key={post.slug}>
                {body}
              </Link>
            ) : (
              <div className="post-row is-pending" key={post.slug}>
                {body}
              </div>
            )
          })
        )}
      </section>
    </>
  )
}
