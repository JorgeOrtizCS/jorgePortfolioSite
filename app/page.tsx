import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react'
import { CopyEmailButton } from '@/components/copy-email'
import {
  about,
  certifications,
  current,
  education,
  experience,
  hero,
  leadership,
  numbers,
  outside,
  site,
  skills,
  story,
} from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="label">{hero.label}</span>

        <h1 className="hero-name">{hero.name}</h1>
        <p className="tagline">{hero.tagline}</p>

        <p>{hero.lede}</p>
        <p className="hero-ask">{hero.ask}</p>

        <div className="hero-actions">
          <Link className="btn btn-primary" href="/projects">
            See my work <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="btn btn-secondary" href={site.resume} download>
            <Download size={18} aria-hidden="true" /> Resume
          </a>
          <CopyEmailButton />
        </div>

        <p className="current">
          <span>Right now</span>
          {current}
        </p>
      </section>

      <section className="section numbers" aria-label="By the numbers">
        {numbers.map(({ value, label }) => (
          <div className="number" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="story">
        <div className="section-head">
          <span className="label">The short version</span>
          <h2>{story.heading}</h2>
        </div>

        <blockquote className="story">
          {story.body.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </blockquote>
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

        <div className="card skill-group certs">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {certifications.map(({ name, status }) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{status}</span>
              </li>
            ))}
          </ul>
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

        <div className="card leadership">
          <span className="label">Leadership</span>
          <h3>{leadership.org}</h3>
          <p>
            {leadership.role} <span className="dot">·</span> {leadership.when}
          </p>
        </div>
      </section>

      <section className="section" id="outside">
        <div className="section-head">
          <span className="label">Off the clock</span>
          <h2>{outside.heading}</h2>
        </div>

        <div className="outside">
          <p>{outside.body}</p>
          <ul className="chips">
            {outside.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
