import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="page-head">
      <span className="label">404</span>
      <h1>Page not found</h1>
      <p>That page doesn&apos;t exist, or it moved.</p>
      <div className="hero-actions">
        <Link className="btn btn-primary" href="/">
          <ArrowLeft size={18} aria-hidden="true" /> Back home
        </Link>
      </div>
    </section>
  )
}
