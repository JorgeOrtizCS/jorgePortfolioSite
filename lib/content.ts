// Single source of truth for site content. Edit here, not in the page components.

export const site = {
  name: 'Jorge Ortiz',
  email: 'ortizjorgecs@gmail.com',
  location: 'Broward County, FL',
  url: 'https://jorgeortizcs.com',
  github: 'https://github.com/JorgeOrtizCS',
  linkedin: 'https://www.linkedin.com/in/jorgeortizcs',
  resume: '/Jorge-Ortiz-Resume.pdf',
} as const

export const about = [
  'I support enterprise IT environments by day and study computer science at Florida Atlantic University. Over the last four years I have handled everything from Tier 1 help desk tickets to Azure AD migrations, endpoint deployments, and threat hunting in SentinelOne.',
  'The part I keep coming back to is detection work: figuring out what normal looks like on a network so you can spot when it stops being normal. I am building toward a SOC analyst role focused on threat detection, incident response, and EDR operations.',
  'Outside of work I do 3D modeling in Blender, mess around with game development, and build websites. I graduate in Spring 2027 with minors in Cybersecurity and Artificial Intelligence.',
]

export const skills: { title: string; items: string[] }[] = [
  {
    title: 'Security operations',
    items: [
      'SentinelOne EDR',
      'AgileBlue SIEM',
      'NodeWare',
      'MITRE ATT&CK',
      'CVE remediation',
      'Threat hunting',
      'Incident response',
    ],
  },
  {
    title: 'Systems and cloud',
    items: [
      'Azure Active Directory',
      'Active Directory',
      'AWS',
      'Linux administration',
      'PowerShell',
      'SonicWall VPN',
      'VoIP',
    ],
  },
  {
    title: 'Development',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'React', 'Node.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Wireshark', 'Jitbit', 'Spiceworks', 'Figma', 'Blender'],
  },
]

export type Role = {
  start: string
  end: string
  title: string
  org: string
  place: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    start: 'Feb 2026',
    end: 'Mar 2026',
    title: 'IT Cybersecurity Intern',
    org: 'SkyTek Solutions',
    place: 'Coral Springs, FL',
    bullets: [
      'Ran CVE remediation and vulnerability triage for managed service clients, prioritizing critical exposures across their environments.',
      'Monitored and analyzed security events in AgileBlue SIEM, supporting detection and incident response workflows.',
      'Wrote PowerShell scripts to automate client onboarding and endpoint configuration.',
      'Handled Tier 1 SOC triage, escalating confirmed threats and documenting findings against client SLAs.',
    ],
  },
  {
    start: 'Jul 2025',
    end: 'Jan 2026',
    title: 'IT Systems Analyst & Helpdesk',
    org: 'RCC Associates',
    place: 'Deerfield Beach, FL',
    bullets: [
      'Supported 100+ employees across hardware, networking, VoIP, and enterprise systems.',
      'Led a hybrid Active Directory and Azure AD implementation that centralized identity management.',
      'Rolled out modern helpdesk and ticketing platforms (Jitbit, Spiceworks).',
      'Ran threat hunting in SentinelOne ThreatOps using EDR queries and MITRE ATT&CK techniques.',
    ],
  },
  {
    start: 'Oct 2022',
    end: 'Jul 2025',
    title: 'Help Desk Technician',
    org: 'Banyan Treatment Centers',
    place: 'Pompano Beach, FL',
    bullets: [
      'Provided Tier 1-3 support for 2,000+ users across multiple treatment centers while maintaining HIPAA compliance.',
      'Managed user accounts and infrastructure in Azure AD, including setup for newly opened sites in other states.',
      'Led security awareness training initiatives and kept satisfaction high on resolved tickets.',
    ],
  },
  {
    start: 'May 2019',
    end: 'Jul 2019',
    title: 'IT Intern',
    org: 'Broward County Public Schools',
    place: 'Broward County, FL',
    bullets: [
      'Diagnosed hardware, software, and connectivity issues across school sites.',
      'Imaged 200+ laptops before the school year and assisted with ticketing and network troubleshooting.',
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
    detail: 'Completed before transferring to FAU.',
  },
]

export type Project = {
  title: string
  status: string
  stack: string[]
  description: string
  href?: string
  hrefLabel?: string
}

export const projects: Project[] = [
  {
    title: 'Lateral Movement Detection Lab',
    status: 'In progress',
    stack: ['Python', 'Elastic SIEM', 'Wireshark'],
    description:
      'A home lab that detects lateral movement in a simulated network. I built the log ingestion pipeline and wrote custom SIEM detection rules. The idea came from a real lateral movement incident I watched unfold at RCC Associates.',
    href: site.github,
    hrefLabel: 'View on GitHub',
  },
  {
    title: 'MGI Farms',
    status: 'Shipped',
    stack: ['React', 'Node.js', 'TypeScript'],
    description:
      'A full-stack site for a Michigan agriculture startup. Drone footage hero, Figma prototyping, and a build out across two states. I volunteered as their developer.',
  },
  {
    title: 'Bunkerheadz',
    status: 'Archived',
    stack: ['Unity', 'C#', 'Pixel Art'],
    description:
      'An indie game dev group I founded and led. We built a Flappy Bird-style game from scratch with original pixel art, then moved the project into Unity 3D.',
  },
  {
    title: 'This Site',
    status: 'Live',
    stack: ['Next.js', 'TypeScript', 'MDX'],
    description:
      'The site you are on. Rebuilt from static HTML into a Next.js App Router project with an MDX-backed blog. It started as a CodePath Web 101 assignment.',
    href: site.github,
    hrefLabel: 'View source',
  },
]
