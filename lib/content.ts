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

export const hero = {
  label: 'Defensive Security \u00b7 Detection & Response',
  name: 'Jorge Ortiz',
  tagline: 'Blue team by trade, red team by curiosity.',
  lede: 'CS student at FAU, four years across enterprise IT, from Tier 1 tickets to threat hunting in SentinelOne and alert triage in a SOC. Currently building SentinelZero, a lateral movement detection platform.',
  ask: 'Looking for defensive security work: SOC, detection engineering, or incident response.',
  feature: {
    src: '/images/sentinelzero-cover.jpg',
    alt: 'SentinelZero / LateralWatch title card showing a network graph and MITRE ATT&CK technique tags',
    caption: 'SentinelZero, my lateral movement detection platform',
    href: '/projects',
  },
}

/** One line, near the top. Update this whenever it stops being true. */
export const current =
  'Studying for CompTIA Network+, building out SentinelZero\u2019s alert pipeline, and working through offensive labs on BreachLab to sharpen my detections.'

export const numbers: { value: string; label: string }[] = [
  { value: '4 yrs', label: 'in enterprise IT' },
  { value: '2,000+', label: 'employees supported' },
  { value: '75-80%', label: 'phishing pass rate, up from 40%' },
  { value: '15-20', label: 'tickets a day, under 20 min each' },
]

export const story = {
  heading: 'Why detection',
  body: [
    'While I was at RCC Associates I watched a lateral movement incident unfold on our network. It got handled, but what stuck with me was how much of the evidence had been sitting in logs the whole time, waiting for someone to know what to look for.',
    'That is why I moved off the help desk and into security, and it is the reason I am building SentinelZero. It is also why I spend my own time in offensive labs. You cannot write a detection for a technique you have never run yourself.',
  ],
}

export const about = [
  'I support enterprise IT environments and study computer science at Florida Atlantic University. Over the last four years I have gone from Tier 1 tickets to supervising technicians, running hybrid Active Directory and Azure AD implementations, and threat hunting in SentinelOne.',
  'The part I keep coming back to is detection work: figuring out what normal looks like on a network so you can tell when it stops being normal. I am building toward defensive security roles focused on detection, incident response, and EDR operations.',
  'I also practice on the offensive side. Understanding how an attacker actually moves is what makes a detection rule worth writing, so I work through labs on my own time and feed what I learn back into SentinelZero.',
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

export const leadership = {
  org: 'FAU Cybersecurity Club',
  role: 'Officer',
  when: 'Fall 2026',
}

export type Shot = { src: string; alt: string; caption: string }

export type Project = {
  title: string
  status: string
  stack: string[]
  description: string
  href?: string
  hrefLabel?: string
  cover?: Shot
  shots?: Shot[]
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
    cover: {
      src: '/images/sentinelzero-cover.jpg',
      alt: 'SentinelZero / LateralWatch title card with a network graph and MITRE technique tags',
      caption: 'SentinelZero / LateralWatch',
    },
    shots: [
      {
        src: '/images/sentinelzero-api.jpg',
        alt: 'SentinelZero API documentation listing events, detect, alerts, and health endpoints',
        caption: 'The API surface: event ingestion, detection runs, and alert retrieval.',
      },
      {
        src: '/images/sentinelzero-events.jpg',
        alt: 'Bulk event ingestion request and a 201 response creating seven login events',
        caption: 'Bulk ingesting RDP and SMB login events across hosts before a detection run.',
      },
    ],
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
    cover: {
      src: '/images/mgi-farms.jpg',
      alt: 'MGI Farms homepage with a drone footage hero and registration call to action',
      caption: 'MGI Farms',
    },
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
