'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' },
]

export function Wordmark() {
  return (
    <span className="wordmark">
      <span className="prompt">./</span>JORGE<span className="accent">_</span>ORTIZ
    </span>
  )
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Close on Escape so the menu is not a keyboard trap.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav className="nav-wrap" aria-label="Primary">
      <Link className="wordmark-link" href="/" aria-label="Jorge Ortiz, home">
        <Wordmark />
      </Link>

      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-nav">
        {links.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link key={href} href={href} aria-current={active ? 'page' : undefined}>
              {label}
            </Link>
          )
        })}
      </div>

      <div className="nav-status">
        <span className="status-dot" aria-hidden="true" /> open to soc roles
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  )
}
