import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="page-header">
      <p className="eyebrow">
        <span className="prompt">[</span> 404 <span className="prompt">]</span>
      </p>
      <h1>
        No route
        <br />
        <span>to host.</span>
      </h1>
      <p>That page does not exist, or it moved during the rebuild.</p>
      <Link className="button button-green" href="/">
        <ArrowLeft size={18} aria-hidden="true" /> back home
      </Link>
    </section>
  )
}
