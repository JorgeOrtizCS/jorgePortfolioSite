import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/content'
import { Wordmark } from './nav'

export function Footer() {
  return (
    <footer className="footer">
      <Link className="wordmark-link" href="/">
        <Wordmark />
      </Link>

      <nav className="footer-links" aria-label="Elsewhere">
        <a href={site.github} target="_blank" rel="noreferrer noopener">
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
          LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <Link href="/contact">
          Contact <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>

      <span className="footer-note">&copy; {new Date().getFullYear()} Jorge Ortiz</span>
    </footer>
  )
}
