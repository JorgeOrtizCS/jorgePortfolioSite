import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Detection labs, client sites, and other things Jorge Ortiz has built.',
}

export default function ProjectsPage() {
  const [lead, ...rest] = projects

  return (
    <>
      <header className="page-head">
        <span className="label">Projects</span>
        <h1>Things I&apos;ve built</h1>
        <p>
          Security labs, client work, and side projects. Some are finished, some are still going.
        </p>
      </header>

      {/* Lead project gets the full treatment: cover, copy, then supporting shots. */}
      <article className="project-lead" aria-labelledby="lead-title">
        {lead.cover ? (
          <figure className="shot shot-cover">
            <Image
              src={lead.cover.src}
              alt={lead.cover.alt}
              width={1531}
              height={1268}
              priority
              sizes="(max-width: 900px) 100vw, 1080px"
            />
          </figure>
        ) : null}

        <div className="project-lead-body">
          <div className="project-top">
            <h2 id="lead-title">{lead.title}</h2>
            <span className="pill is-live">{lead.status}</span>
          </div>

          <p className="project-copy">{lead.description}</p>

          <ul className="chips">
            {lead.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          {lead.href ? (
            <a className="link" href={lead.href} target="_blank" rel="noreferrer noopener">
              {lead.hrefLabel ?? 'View'} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {lead.shots?.length ? (
          <div className="shot-row">
            {lead.shots.map((shot) => (
              <figure className="shot" key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1400}
                  height={819}
                  sizes="(max-width: 900px) 100vw, 520px"
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </article>

      <section className="projects" aria-label="Other projects">
        {rest.map((project) => (
          <article className={`project ${project.cover ? 'has-cover' : ''}`} key={project.title}>
            {project.cover ? (
              <figure className="shot shot-inline">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={1600}
                  height={778}
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </figure>
            ) : null}

            <div className="project-body">
              <div className="project-top">
                <h2>{project.title}</h2>
                <span
                  className={`pill ${
                    project.status === 'Live' || project.status === 'In progress' ? 'is-live' : ''
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="project-copy">{project.description}</p>

              <ul className="chips">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              {project.href ? (
                <a className="link" href={project.href} target="_blank" rel="noreferrer noopener">
                  {project.hrefLabel ?? 'View'} <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
