import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { CopyEmailButton } from '@/components/copy-email'
import { about, hero, site, stats, toolset } from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="prompt">[</span> {hero.eyebrow} <span className="prompt">]</span>
          </p>

          <h1>
            Build quietly.
            <br />
            <span>Defend loudly.</span>
            <i aria-hidden="true">_</i>
          </h1>

          <p className="hero-lede">{hero.lede}</p>

          <div className="hero-actions">
            <Link className="button button-green" href="/projects">
              view projects <ArrowDownRight size={18} aria-hidden="true" />
            </Link>
            <CopyEmailButton />
            <a className="button button-ghost" href={site.resume} download>
              <Download size={17} aria-hidden="true" /> resume
            </a>
          </div>
        </div>

        <aside className="hero-terminal" aria-label="Profile summary">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>jorge@localhost:~</span>
            <span className="terminal-live">online</span>
          </div>

          <div className="terminal-body">
            <p className="dim">// identity verified</p>
            <p>
              <span className="green">$</span> whoami
            </p>
            <p className="terminal-output">
              jorge.ortiz
              <br />
              <span className="dim">security / systems / software</span>
            </p>
            <p>
              <span className="green">$</span> cat focus.txt
            </p>
            <p className="terminal-output">
              Threat detection, incident
              <br />
              response, and EDR operations.
            </p>
            <p>
              <span className="green">$</span> status
            </p>
            <p className="terminal-output">
              <span className="green">open to SOC analyst roles</span>
              <br />
              <span className="dim">
                location: {site.location} · timezone: ET
              </span>
            </p>
            <p className="prompt-line">
              <span className="green">$</span> <span className="cursor-block" aria-hidden="true" />
            </p>
          </div>

          <div className="terminal-foot">
            <span>secure session</span>
            <span>0x4A4F524745</span>
          </div>
        </aside>
      </section>

      <section className="stat-strip" aria-label="At a glance">
        {stats.map(({ value, label, accent }) => (
          <div className={`stat-tile ${accent ? 'is-accent' : ''}`} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section-grid" id="about">
        <div className="section-index">01 / about</div>
        <div className="about-content">
          <p className="kicker">A little context</p>
          <h2>
            Security is not only about stopping the attack. It is about helping people{' '}
            <span>see clearly</span> when the system gets complicated.
          </h2>
          {about.map((paragraph) => (
            <p className="about-copy" key={paragraph.slice(0, 32)}>
              {paragraph}
            </p>
          ))}
          <Link className="inline-link" href="/experience">
            read the full record <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-grid" id="toolset">
        <div className="section-index">02 / toolset</div>
        <div className="toolset-grid">
          {toolset.map(({ title, items }) => (
            <article className="tool-card" key={title}>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-links section-grid">
        <Link className="home-link-card" href="/projects">
          <span>03 / selected work</span>
          <strong>
            Projects <ArrowUpRight size={24} aria-hidden="true" />
          </strong>
          <small>Detection labs, shipped sites, and proof-of-concept builds.</small>
        </Link>
        <Link className="home-link-card" href="/blog">
          <span>04 / field notes</span>
          <strong>
            Blog <ArrowUpRight size={24} aria-hidden="true" />
          </strong>
          <small>Write-ups on detection engineering, home lab work, and IT ops.</small>
        </Link>
      </section>
    </>
  )
}
