'use client'

import { Check, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/content'

export function CopyEmailButton({ className = 'btn btn-secondary' }: { className?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <button type="button" className={className} onClick={copy}>
      {copied ? (
        <>
          <Check size={18} aria-hidden="true" /> Copied
        </>
      ) : (
        <>
          <Mail size={18} aria-hidden="true" /> Copy email
        </>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${site.email} copied to clipboard` : ''}
      </span>
    </button>
  )
}
