// lib/data.ts — thomasgoodman.me
// All content data for the portfolio. Single source of truth.

import type {
  ExperienceItem,
  ProjectData,
  StackGroup,
  EducationItem,
  HonourItem,
  WhyCard,
  HobbyItem,
  ContactLink,
} from '@/types'

// ── Experience ────────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    org: 'PolicyCheck',
    title: 'Software Developer (Mentored Internship)',
    period: 'October 2025 to December 2025',
    location: 'Auckland / Remote',
    note: '10-week internship',
    bullets: [
      'Integrated Listmonk (open-source email campaign platform) as a dedicated Docker service into the PolicyCheck Next.js platform, enabling internal tools to create, preview, schedule, and manage campaigns.',
      'Developed a Node.js seeding middleware that provisions initial campaign and subscriber data, streamlining development-environment setup.',
      'Resolved build and networking issues across 5+ services within Docker Compose stacks, improving system connectivity and deployment reliability.',
      'Implemented backend APIs and interactive Next.js components for subscription management and content scheduling.',
      'Troubleshot browser/API boundary issues (auth, CORS, network failures) in an Agile team environment.',
    ],
    tags: ['Next.js', 'Docker Compose', 'Node.js', 'REST APIs', 'Agile'],
  },
  {
    org: 'Mission Ready HQ',
    title: 'Full-Stack Developer (Student)',
    period: 'March 2025 to December 2025',
    location: 'Remote, NZ',
    note: null,
    bullets: [
      'Designed and built complete end-to-end applications featuring Node.js/Express APIs, React frontends, and MySQL-backed data layers across multiple Level 6 diploma projects.',
      'Built RESTful APIs and reusable React (Tailwind/MUI) components.',
      'Restructured repositories to support GitHub Actions CI/CD pipelines and reproducible environments.',
      'Designed comprehensive database schemas and seeded 1,000+ records using migration-ready SQL files.',
      'Created Docker container configurations and Azure deployment guides.',
      'Designed instructional starter kits used by fellow cohort members.',
    ],
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    org: 'Royal New Zealand Air Force',
    title: 'Avionics Technician',
    period: 'May 2008 to April 2024',
    location: 'Whenuapai, Auckland',
    note: '15+ years of continuous service',
    bullets: [
      'Diagnosed aircraft electrical and electronic systems in safety-critical environments, executing systematic fault-finding under tight deadlines to ensure mission readiness.',
      'Maintained and repaired GPS navigation systems, UHF/VHF communications equipment, and integrated avionics suites across multiple aircraft types.',
      'Performed precision fault-finding using oscilloscopes, multimeters, and signal generators.',
      'Read and interpreted aircraft wiring diagrams, schematics, and technical publications.',
      'Followed and enforced strict aviation compliance and documentation standards (traceable, peer-reviewed, audit-ready).',
      'Led operational flight-line maintenance, conducting pre/post-flight inspections and repairs.',
      'Co-founded the unit esports club and coordinated alpine sports activities, building team cohesion.',
    ],
    tags: ['Avionics', 'Fault-Finding', 'Systems', 'Compliance', 'Documentation'],
  },
]

// ── Projects ──────────────────────────────────────────────────────────────────

export const projects: ProjectData[] = [
  {
    name: 'Whenuapai Key Press Manager',
    period: 'Built 2020 to 2024 during RNZAF service',
    context: 'Personal initiative, not RNZAF-commissioned.',
    desc: 'Full-stack web application that replaced a manual paper-based key tracking process at RNZAF Whenuapai. Features a real-time dashboard showing the current keyholder, issue timestamps, and overdue alerts, plus an audit-history view enabling supervisors to inspect all key movements. Designed with strict access control and audit logging to meet RNZAF base security and compliance requirements.',
    highlight: '80% reduction in key tracking time',
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker', 'Audit Logging'],
    link: null,
    badge: 'RNZAF',
  },
  {
    name: 'Presence Guard',
    period: 'Built 2020 to 2024 during RNZAF service',
    context: 'Personal initiative, not RNZAF-commissioned.',
    desc: 'Visitor management system for a restricted RNZAF building. Captures visitor details, purpose of visit, escort information, and time in / time out. Provides the duty officer with a live register and an exportable daily log for end-of-day security records. Replaced handwritten visitor books with a searchable, tamper-evident digital record aligned to base security protocols.',
    highlight: null,
    tags: ['Node.js', 'Express', 'React', 'MySQL', 'Role-Based Access'],
    link: null,
    badge: 'RNZAF',
  },
]

// ── Tech Stack ────────────────────────────────────────────────────────────────

export const stackGroups: StackGroup[] = [
  {
    label: 'Strong / Production-Ready',
    comment: '// daily drivers',
    items: [
      'JavaScript (ES6+)', 'Node.js', 'Express', 'React', 'Next.js',
      'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI (MUI)', 'Bootstrap',
      'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB',
      'Docker', 'Docker Compose', 'GitHub Actions CI/CD',
      'Git', 'GitHub', 'Agile/Scrum',
      'Unit Testing', 'Responsive Design', 'Figma',
    ],
    tier: 'strong',
  },
  {
    label: 'Working Knowledge',
    comment: '// used in projects, still deepening',
    items: ['TypeScript', 'Azure', 'AWS', 'GCP', 'Redis', 'Linux', 'Bash'],
    tier: 'working',
  },
  {
    label: 'Elementary',
    comment: '// foundational, not production',
    items: ['Python'],
    tier: 'elementary',
  },
  {
    label: 'Coursework Exposure',
    comment: '// academic only',
    items: ['Java', 'Native C'],
    tier: 'coursework',
  },
  {
    label: 'Currently Learning',
    comment: '// in progress',
    items: ['C# / .NET'],
    tier: 'learning',
  },
]

// ── Education ─────────────────────────────────────────────────────────────────

export const education: EducationItem[] = [
  {
    type: 'diploma',
    title: 'Diploma in Full-Stack Development (Level 6)',
    org: 'Mission Ready HQ',
    period: 'March 2025 to December 2025',
    note: null,
  },
  {
    type: 'certificate',
    title: 'Professional Certificate in Software Engineering',
    org: 'Institute of Data (AUT accredited)',
    period: 'July 2023 to January 2024',
    note: null,
  },
  {
    type: 'university',
    title: 'Bachelor of Computer and Information Sciences - Year 1 papers',
    org: 'Auckland University of Technology (AUT)',
    period: '2016 to 2018',
    note: 'Papers: Native C, Java, Information Systems',
  },
]

export const honours: HonourItem[] = [
  { title: 'Regular Forces Medal', desc: 'Service recognition' },
  { title: 'Long Service and Good Conduct Medal', desc: '15+ years exemplary conduct' },
]

// ── Why Me ────────────────────────────────────────────────────────────────────

export const whyCards: WhyCard[] = [
  {
    title: 'Real-World Discipline',
    body: '15 years working to strict standards where mistakes had real consequences. That mindset transfers directly to software.',
  },
  {
    title: 'Methodical by Nature',
    body: 'Does not cut corners on documentation. Stays calm and works through problems systematically, even under pressure.',
  },
  {
    title: 'Fast Learner',
    body: 'Picks things up quickly and applies new knowledge immediately. Moved from avionics to shipping production code within two years.',
  },
  {
    title: 'Genuine Craftsmanship',
    body: 'Cares about doing the work properly, not just getting it done. Documentation, edge cases, and maintainability are not afterthoughts.',
  },
  {
    title: 'Cross-Context Fluency',
    body: 'Equally comfortable switching between hardware-level fault-finding and modern web app architecture. Systems thinking is systems thinking.',
  },
  {
    title: 'Compliance Fluency',
    body: 'Comfortable with traceable, peer-reviewed, audit-ready documentation. Valuable in regulated industries and security-conscious teams.',
  },
]

// ── Hobbies ───────────────────────────────────────────────────────────────────

export const hobbies: HobbyItem[] = [
  { label: 'Family',        desc: 'The reason for everything.' },
  { label: 'Outdoors',      desc: 'Exploring the bush and coast around Auckland.' },
  { label: 'Mountain Biking', desc: 'Trails, flow, and the occasional bail.' },
  { label: 'Snowboarding',  desc: 'Hitting the slopes when the season allows.' },
  { label: 'RC Racing',     desc: '1/10th scale on-road racing. Seriously competitive.' },
  { label: 'Gardening',     desc: 'Growing things. The slow kind of debugging.' },
  { label: '3D Printing',   desc: 'Designing and printing parts, mounts, and random useful things.' },
  { label: 'Coding',        desc: 'Yes, also a hobby. Side projects keep the skills sharp.' },
]

// ── Contact ───────────────────────────────────────────────────────────────────

export const contactLinks: ContactLink[] = [
  { label: 'Email',    value: 'tommy@tommytinkers.nz',          href: 'mailto:tommy@tommytinkers.nz' },
  { label: 'LinkedIn', value: 'linkedin.com/in/tgnz',           href: 'https://linkedin.com/in/tgnz' },
  { label: 'GitHub',   value: 'github.com/tonkatommy',          href: 'https://github.com/tonkatommy' },
  { label: 'Location', value: 'Helensville, Auckland, New Zealand', href: null },
]
