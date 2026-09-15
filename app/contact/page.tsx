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
      <header className="page-header">
        <p className="eyebrow">
          <span className="prompt">[</span> 05 / contact <span className="prompt">]</span>
        </p>
        <h1>
          Open
          <br />
          <span>channel.</span>
        </h1>
        <p>
          Open to SOC analyst roles, cybersecurity opportunities, and dev collaborations. If you are
          building something that has to hold up under pressure, I would like to hear about it.
        </p>
      </header>

      <section className="contact-card">
        <p className="kicker">direct line</p>

        <a className="contact-email" href={`mailto:${site.email}`}>
          <Mail size={22} aria-hidden="true" />
          {site.email}
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>

        <div className="contact-actions">
          <CopyEmailButton className="button button-green" />
          <a
            className="button button-outline"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a
            className="button button-outline"
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <dl className="contact-facts">
          <div>
            <dt>Status</dt>
            <dd className="green">Actively interviewing for SOC analyst roles</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{site.location}, open to remote</dd>
          </div>
          <div>
            <dt>Graduating</dt>
            <dd>Spring 2027, Florida Atlantic University</dd>
          </div>
        </dl>
      </section>
    </>
  )
}
