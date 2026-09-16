'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

// Ignore scroll jitter below this many pixels so the bar does not flicker.
const THRESHOLD = 8
// Never hide the bar while still near the top of the page.
const TOP_ZONE = 100

export function Nav() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastY.current = window.scrollY

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      setScrolled(y > 4)

      if (Math.abs(delta) > THRESHOLD) {
        setHidden(delta > 0 && y > TOP_ZONE)
        lastY.current = y
      }

      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A route change should always bring the bar back.
  useEffect(() => {
    setHidden(false)
    lastY.current = 0
  }, [pathname])

  return (
    <header className={`nav-bar ${hidden ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav" aria-label="Primary">
        {links.map(({ href, label }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <Link key={href} href={href} aria-current={active ? 'page' : undefined}>
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
