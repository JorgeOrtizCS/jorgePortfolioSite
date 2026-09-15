'use client'

import { Check, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/content'

export function CopyEmailButton({ className = 'button button-outline' }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      if (timeout.current) clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard can be blocked (insecure origin, permissions).
      // Fall back to the mail client rather than failing silently.
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <button type="button" className={className} onClick={copy}>
      {copied ? (
        <>
          <Check size={17} aria-hidden="true" /> copied
        </>
      ) : (
        <>
          <Mail size={17} aria-hidden="true" /> copy email
        </>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${site.email} copied to clipboard` : ''}
      </span>
    </button>
  )
}
