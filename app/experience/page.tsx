import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { education, experience, site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Four years across IT operations, cybersecurity tooling, and enterprise infrastructure, from Tier 1 triage to EDR threat hunting and SIEM analysis.',
}

export default function ExperiencePage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          <span className="prompt">[</span> 01 / work history <span className="prompt">]</span>
        </p>
        <h1>
          Operational
          <br />
          <span>record.</span>
        </h1>
        <p>
          Four years across IT operations, cybersecurity tooling, and enterprise infrastructure,
          from Tier 1 triage to EDR threat hunting and SIEM analysis.
        </p>
        <a className="button button-green" href={site.resume} download>
          <Download size={18} aria-hidden="true" /> download resume
        </a>
      </header>

      <section className="timeline" aria-label="Work history">
        {experience.map((role) => (
          <article className="role" key={`${role.org}-${role.start}`}>
            <div className="role-when">
              <span>{role.start}</span>
              <span className="dim">↓</span>
              <span>{role.end}</span>
            </div>

            <div className="role-body">
              <h2>{role.title}</h2>
              <p className="role-org">
                {role.org} <span className="dim">·</span> {role.place}
              </p>

              <div className="tag-list">
                {role.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <ul className="role-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 40)}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="section-grid" id="education">
        <div className="section-index">02 / academic</div>
        <div className="education-grid">
          {education.map((entry) => (
            <article className="education-card" key={entry.school}>
              <p className="kicker">
                {entry.place} <span className="dim">·</span> {entry.date}
              </p>
              <h2>{entry.school}</h2>
              <p className="education-degree">{entry.degree}</p>
              <p className="education-detail">{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
