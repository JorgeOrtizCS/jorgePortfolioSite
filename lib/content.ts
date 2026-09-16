// Single source of truth for site content. Edit here, not in the page components.
// Kept in sync with the resume in public/Jorge-Ortiz-Resume.pdf.

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
  'I support enterprise IT environments and study computer science at Florida Atlantic University. Over the last few years I have worked from Tier 1 help desk tickets up through Azure AD implementations, endpoint deployments, and threat hunting in SentinelOne.',
  'The part I keep coming back to is detection work: figuring out what normal looks like on a network so you can spot when it stops being normal. I am building toward a SOC analyst role focused on threat detection, incident response, and EDR operations.',
  'Outside of work I do 3D modeling in Blender, mess around with game development, and build websites. I graduate in Spring 2027 with a minor in Cybersecurity and A.I.',
]

export const skills: { title: string; items: string[] }[] = [
  {
    title: 'Security & Cloud',
    items: [
      'SentinelOne',
      'Microsoft Sentinel',
      'AgileBlue',
      'NodeWare',
      'MITRE ATT&CK',
      'Azure AD / Entra ID',
      'Active Directory',
      'TCP/IP Networking',
      'Linux',
      'AWS',
    ],
  },
  {
    title: 'Languages & Tools',
    items: [
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'TypeScript',
      'PowerShell',
      'Docker',
      'React',
      'Node.js',
      'FastAPI',
      'Git / GitHub',
      'Figma',
    ],
  },
]

export const certifications: { name: string; status: string }[] = [
  { name: 'CompTIA Network+ (N10-009)', status: 'In progress, expected 2026' },
  { name: 'CompTIA Security+', status: 'Planned, 2026' },
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
    start: 'Mar 2026',
    end: 'Apr 2026',
    title: 'Cybersecurity Intern',
    org: 'SkyTek Solutions',
    place: 'Coral Springs, FL',
    bullets: [
      'Monitored and triaged security alerts using AgileBlue SIEM and SentinelOne EDR, applying MITRE ATT&CK techniques to support threat detection.',
      'Researched and tracked CVE remediation efforts to help reduce organizational exposure to known vulnerabilities.',
    ],
  },
  {
    start: 'Jul 2025',
    end: 'Dec 2025',
    title: 'IT Systems Admin',
    org: 'RCC Associates',
    place: 'Deerfield, FL',
    bullets: [
      'Resolved 15-20 tickets daily across hardware, networking, VoIP, and enterprise systems for 100+ employees.',
      'Led hybrid Active Directory and Azure AD implementation, improving centralized identity management and security posture.',
      'Conducted threat hunting and incident analysis via SentinelOne ThreatOps, applying EDR queries and MITRE ATT&CK techniques.',
    ],
  },
  {
    start: 'Aug 2024',
    end: 'Jul 2025',
    title: 'Help Desk Technician, Tier 2',
    org: 'Banyan Treatment Centers',
    place: 'Pompano Beach, FL',
    bullets: [
      'Resolved 15-20 support tickets daily, averaging under 20 minutes per ticket.',
      'Supervised 3 outsourced IT support technicians, coordinating daily tasks and service delivery across multiple centers.',
      'Administered the company-wide Infosec IQ security awareness program for 2,000+ employees, including monthly training, quizzes, and phishing simulations.',
      'Drove phishing simulation pass rates from 40% to 75-80% through targeted training campaigns and compliance dashboards reported to executive leadership.',
    ],
  },
  {
    start: 'Oct 2022',
    end: 'Aug 2023',
    title: 'Help Desk Technician, Tier 1',
    org: 'Banyan Treatment Centers',
    place: 'Pompano Beach, FL',
    bullets: [
      'Provided Tier 1 technical support and resolved service tickets across hardware, software, and account access, ensuring HIPAA-compliant handling of records.',
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
    date: 'May 2027',
    degree: 'B.S. Computer Science',
    detail: 'Minor in Cybersecurity and A.I. GPA 3.6.',
  },
  {
    school: 'Broward College',
    place: 'Coconut Creek, FL',
    date: 'Aug 2024',
    degree: 'A.A. Computer Science',
    detail: 'GPA 3.2. Completed before transferring to FAU.',
  },
]

export const leadership = 'FAU Cybersecurity Club — Officer, Fall 2026'

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
    title: 'SentinelZero (LateralWatch)',
    status: 'In progress',
    stack: ['React', 'FastAPI', 'Vercel', 'MITRE ATT&CK'],
    description:
      'A full-stack web application that ingests network logs and detects lateral movement patterns across enterprise environments. React and Vercel on the front end, FastAPI on the back, with real-time alert visualization and anomaly detection logic. Detection rules are built around MITRE ATT&CK lateral movement techniques T1021, T1075, and T1076, and the whole idea came from an incident I watched unfold at RCC.',
    href: 'https://github.com/JorgeOrtizCS/sentinelZero',
    hrefLabel: 'View on GitHub',
  },
  {
    title: 'Aperture',
    status: 'In progress',
    stack: ['OpenCV', 'MediaPipe', 'Python'],
    description:
      'Privacy-preserving content sharing, built as my FAU capstone (EGN4950C) under Prof. Hari Kalva. I developed the camera-based detection and screenshot prevention subsystem using OpenCV and MediaPipe, and contributed to the SRS and architecture documentation.',
    href: 'https://github.com/JorgeOrtizCS/aperture',
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
    href: 'https://github.com/JorgeOrtizCS/jorgePortfolioSite',
    hrefLabel: 'View source',
  },
]
