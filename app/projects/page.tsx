import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Detection labs, shipped client sites, and proof-of-concept builds by Jorge Ortiz.',
}

export default function ProjectsPage() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">
          <span className="prompt">[</span> 03 / selected work <span className="prompt">]</span>
        </p>
        <h1>
          Things I have
          <br />
          <span>actually built.</span>
        </h1>
        <p>
          Active labs, shipped products, and proof-of-concept work. Every entry here is live,
          documented, or iterated from real experience.
        </p>
      </header>

      <section className="project-grid" aria-label="Projects">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-head">
              <span className="project-number">{project.number}</span>
              <span className={`status-pill status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status}
              </span>
            </div>

            <h2>{project.title}</h2>
            <p className="project-copy">{project.description}</p>

            <div className="tag-list">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {project.href ? (
              <a
                className="inline-link"
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
