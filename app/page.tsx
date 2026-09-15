import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { CopyEmailButton } from '@/components/copy-email'
import { about, education, experience, site, skills } from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="label">Cybersecurity &amp; IT Systems</span>

        <h1>
          Hi, I&apos;m Jorge. I work on <span>keeping systems safe</span>.
        </h1>

        <p>
          I&apos;m a computer science student at Florida Atlantic University with four years in
          enterprise IT, now focused on threat detection and incident response. I&apos;m looking for
          a SOC analyst role.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/projects">
            See my work <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="btn btn-secondary" href={site.resume} download>
            <Download size={18} aria-hidden="true" /> Resume
          </a>
          <CopyEmailButton />
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-head">
          <span className="label">About</span>
          <h2>A bit of background</h2>
        </div>

        <div className="prose-block">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <span className="label">Skills</span>
          <h2>What I work with</h2>
        </div>

        <div className="grid-2">
          {skills.map(({ title, items }) => (
            <div className="card skill-group" key={title}>
              <h3>{title}</h3>
              <ul className="chips">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-head">
          <span className="label">Experience</span>
          <h2>Where I&apos;ve worked</h2>
        </div>

        <div className="roles">
          {experience.map((role) => (
            <article className="role" key={`${role.org}-${role.start}`}>
              <div className="role-when">
                {role.start} &ndash; {role.end}
              </div>

              <div>
                <h3>{role.title}</h3>
                <p className="role-org">
                  {role.org} · {role.place}
                </p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <div className="section-head">
          <span className="label">Education</span>
          <h2>School</h2>
        </div>

        <div className="grid-2">
          {education.map((entry) => (
            <div className="card edu" key={entry.school}>
              <h3>{entry.school}</h3>
              <p className="edu-meta">
                {entry.place} · {entry.date}
              </p>
              <p className="edu-degree">{entry.degree}</p>
              <p className="edu-detail">{entry.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <Link className="next-card" href="/projects">
            <h3>
              Projects <ArrowUpRight size={22} aria-hidden="true" />
            </h3>
            <p>Detection labs, client sites, and things I&apos;ve built.</p>
          </Link>

          <Link className="next-card" href="/blog">
            <h3>
              Blog <ArrowUpRight size={22} aria-hidden="true" />
            </h3>
            <p>Write-ups on detection work, home lab builds, and IT operations.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
