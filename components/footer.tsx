import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/content'

export function Footer() {
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} {site.name}
      </span>

      <nav className="footer-links" aria-label="Elsewhere">
        <a href={site.github} target="_blank" rel="noreferrer noopener">
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
          LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  )
}
