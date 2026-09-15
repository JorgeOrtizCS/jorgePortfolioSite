import type { Metadata } from 'next'
import { ArrowUpRight, Mail } from 'lucide-react'
import { CopyEmailButton } from '@/components/copy-email'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Jorge Ortiz about SOC analyst roles, cybersecurity work, and dev collaborations.',
}

export default function ContactPage() {
  return (
    <>
      <header className="page-head">
        <span className="label">Contact</span>
        <h1>Get in touch</h1>
        <p>
          I&apos;m looking for SOC analyst roles and open to cybersecurity work or dev
          collaborations. Email is the fastest way to reach me.
        </p>
      </header>

      <section className="contact">
        <span className="label">Email</span>

        <a className="contact-email" href={`mailto:${site.email}`}>
          <Mail size={26} aria-hidden="true" />
          {site.email}
        </a>

        <div className="contact-actions">
          <CopyEmailButton className="btn btn-primary" />
          <a
            className="btn btn-secondary"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            className="btn btn-secondary"
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <dl className="facts">
          <div>
            <dt>Looking for</dt>
            <dd>SOC analyst roles</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{site.location}, open to remote</dd>
          </div>
          <div>
            <dt>Graduating</dt>
            <dd>Spring 2027, FAU</dd>
          </div>
        </dl>
      </section>
    </>
  )
}
