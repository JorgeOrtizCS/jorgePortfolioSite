// Single source of truth for site content.
// Edit here, not in the page components.

export const site = {
  name: 'Jorge Ortiz',
  role: 'Cybersecurity / IT Systems / Developer',
  email: 'ortizjorgecs@gmail.com',
  location: 'Broward County, FL',
  url: 'https://jorgeortizcs.com',
  github: 'https://github.com/JorgeOrtizCS',
  linkedin: 'https://www.linkedin.com/in/jorgeortizcs',
  resume: '/Jorge-Ortiz-Resume.pdf',
} as const

export const hero = {
  eyebrow: 'security analyst / it systems / builder',
  lede: "I'm Jorge Ortiz, a CS student at Florida Atlantic University hunting SOC analyst roles. Four years across enterprise IT, EDR tooling, and SIEM platforms, building toward the front lines of cyber defense.",
}

export const stats: { value: string; label: string; accent?: boolean }[] = [
  { value: '4+', label: 'Years IT' },
  { value: '2K+', label: 'Users supported' },
  { value: '3.60', label: 'Institutional GPA' },
  { value: 'SOC', label: 'Target role', accent: true },
]

export const about = [
  'IT professional and CS student supporting enterprise environments, building full-stack applications, and working deep in cybersecurity. Supported organizations with thousands of users, managed Azure AD, and ran threat analysis with SentinelOne and AgileBlue.',
  'Off the terminal: 3D modeling in Blender, game dev, and visual design. Pursuing a BS in Computer Science with minors in Cybersecurity and Artificial Intelligence, graduating Spring 2027. Targeting SOC roles focused on threat detection, incident response, and EDR operations.',
]

export const toolset: { title: string; items: string[] }[] = [
  {
    title: 'Security & SOC',
    items: [
      'SentinelOne EDR',
      'AgileBlue SIEM',
      'NodeWare',
      'MITRE ATT&CK',
      'CVE Remediation',
      'Threat Hunting',
      'Incident Response',
      'PowerShell',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      'Azure Active Directory',
      'AWS',
      'Linux Admin',
      'Active Directory',
      'VoIP',
      'SonicWall VPN',
      'Jitbit',
      'Spiceworks',
    ],
  },
  {
    title: 'Languages',
    items: [
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'HTML / CSS',
      'Three.js',
    ],
  },
  {
    title: 'Tools & Creative',
    items: ['GitHub', 'Docker', 'Figma', 'VS Code', 'Blender', 'Unity', 'C#', 'Pixel Art', 'WebGL'],
  },
]

export type Role = {
  start: string
  end: string
  title: string
  org: string
  place: string
  tags: string[]
  bullets: string[]
}

export const experience: Role[] = [
  {
    start: 'Feb 2026',
    end: 'Mar 2026',
    title: 'IT Cybersecurity Intern',
    org: 'SkyTek Solutions',
    place: 'Coral Springs, FL',
    tags: ['SOC', 'SIEM', 'CVE'],
    bullets: [
      'Performed CVE remediation and vulnerability triage for MSP clients via NodeWare, prioritizing critical exposures across environments.',
      'Monitored and analyzed security events through AgileBlue SIEM/SOC, supporting detection and incident response workflows.',
      'Built PowerShell scripts to automate client onboarding and endpoint configuration across managed environments.',
      'Conducted Tier 1 SOC triage, escalating confirmed threats and documenting findings per client SLAs.',
    ],
  },
  {
    start: 'Jul 2025',
    end: 'Jan 2026',
    title: 'IT Systems Analyst & Helpdesk',
    org: 'RCC Associates',
    place: 'Deerfield Beach, FL',
    tags: ['EDR', 'Azure AD', 'Tier 1-3'],
    bullets: [
      'Provided Tier 1-3 support for 100+ employees across hardware, networking, VoIP, and enterprise systems.',
      'Led hybrid Active Directory and Azure AD implementation, improving centralized identity and security posture.',
      'Spearheaded deployment of modern helpdesk and ticketing platforms (Jitbit, Spiceworks).',
      'Conducted threat hunting via SentinelOne ThreatOps, applying EDR queries and MITRE ATT&CK techniques.',
    ],
  },
  {
    start: 'Oct 2022',
    end: 'Jul 2025',
    title: 'Help Desk Technician',
    org: 'Banyan Treatment Centers',
    place: 'Pompano Beach, FL',
    tags: ['HIPAA', '2K+ Users'],
    bullets: [
      'Provided Tier 1-3 support for 2,000+ users across multiple treatment centers, maintaining HIPAA compliance.',
      'Managed user accounts and infrastructure via Azure AD, including setup for newly launched sites across states.',
      'Led Infosec IQ security awareness initiatives and maintained high user satisfaction on resolved tickets.',
    ],
  },
  {
    start: 'May 2019',
    end: 'Jul 2019',
    title: 'IT Intern',
    org: 'Broward County Public Schools',
    place: 'Broward County, FL',
    tags: ['Field Ops'],
    bullets: [
      'Diagnosed and resolved hardware, software, and connectivity issues across school sites.',
      'Imaged 200+ laptops before the school year and assisted senior staff with ticketing and network troubleshooting.',
    ],
  },
]

export type Education = {
  school: string
  place: string
  date: string
  degree: string
  detail: string
}

export const education: Education[] = [
  {
    school: 'Florida Atlantic University',
    place: 'Boca Raton, FL',
    date: 'Expected May 2027',
    degree: 'B.S. Computer Science',
    detail: 'Minors in Cybersecurity and Artificial Intelligence. Institutional GPA 3.60.',
  },
  {
    school: 'Broward College',
    place: 'Coconut Creek, FL',
    date: 'Aug 2024',
    degree: 'Associate of Arts & Sciences, Computer Science',
    detail: 'Completed prior to transferring to FAU.',
  },
]

export type Project = {
  number: string
  title: string
  status: string
  stack: string[]
  description: string
  href?: string
  hrefLabel?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Lateral Movement Detection Lab',
    status: 'In progress',
    stack: ['Python', 'Elastic SIEM', 'Wireshark'],
    description:
      'Home lab detecting lateral movement patterns in a simulated network. Covers log ingestion pipeline setup, custom SIEM detection rules, and full documentation. Motivated directly by a real lateral movement incident I watched unfold at RCC Associates.',
    href: site.github,
    hrefLabel: 'View on GitHub',
  },
  {
    number: '02',
    title: 'MGI Farms',
    status: 'Shipped',
    stack: ['React', 'Node.js', 'TypeScript'],
    description:
      'Full-stack site for a Michigan agriculture startup. 4K drone footage hero and Figma prototyping. Volunteered as developer to build their online presence across two states.',
  },
  {
    number: '03',
    title: 'Bunkerheadz',
    status: 'Archived',
    stack: ['Unity', 'C#', 'Pixel Art'],
    description:
      'Founded and led an indie game dev group. Built a Flappy Bird-style game from scratch with original pixel art, then directed the transition into Unity 3D and repository management.',
  },
  {
    number: '04',
    title: 'This Site',
    status: 'Live',
    stack: ['Next.js', 'TypeScript', 'MDX'],
    description:
      'The portfolio you are reading. Rebuilt from a static HTML site into a typed Next.js App Router project with an MDX-backed field notes section. Iterated from a CodePath Web 101 assignment.',
    href: site.github,
    hrefLabel: 'View source',
  },
]
