import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Detection labs, client sites, and other things Jorge Ortiz has built.',
}

export default function ProjectsPage() {
  return (
    <>
      <header className="page-head">
        <span className="label">Projects</span>
        <h1>Things I&apos;ve built</h1>
        <p>
          Security labs, client work, and side projects. Some are finished, some are still going.
        </p>
      </header>

      <section className="projects" aria-label="Projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
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

            <p>{project.description}</p>

            <ul className="chips">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            {project.href ? (
              <a
                className="link"
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.hrefLabel ?? 'View'} <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </section>
    </>
  )
}
