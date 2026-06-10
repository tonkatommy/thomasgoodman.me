// Hobbies.jsx — thomasgoodman.me

const hobbyItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Family',
    desc: 'The reason for everything.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 17l4-8 4 5 3-3 4 6"/><path d="M21 12a9 9 0 0 1-9 9"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    label: 'Outdoors',
    desc: 'Exploring the bush and coast around Auckland.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: 'Mountain Biking',
    desc: 'Trails, flow, and the occasional bail.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    label: 'Snowboarding',
    desc: 'Hitting the slopes when the season allows.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="2"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
      </svg>
    ),
    label: 'RC Racing',
    desc: '1/10th scale on-road racing. Seriously competitive.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12m0 0C12 7 7 4 2 6"/><path d="M12 12c0-5 5-8 10-6"/>
        <path d="M12 6a4 4 0 0 1 0 6"/>
      </svg>
    ),
    label: 'Gardening',
    desc: 'Growing things. The slow kind of debugging.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    label: '3D Printing',
    desc: 'Designing and printing parts, mounts, and random useful things.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: 'Coding',
    desc: 'Yes, also a hobby. Side projects keep the skills sharp.',
  },
];

const Hobbies = () => (
  <section
    id="hobbies"
    data-screen-label="Hobbies"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-surface)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <SectionLabel text="> 07. hobbies" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block',
        }}>
          Outside the Terminal
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '52ch', marginTop: 'var(--space-6)' }}>
          Based in Helensville, northwest of Auckland, with plenty of room to get outside. Most evenings you'll find Tommy tinkering with something - whether that's code, a printer, or a 1/10th scale car.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-4)' }}>
        {hobbyItems.map((h, i) => (
          <HobbyCard key={i} hobby={h} />
        ))}
      </div>
    </div>
  </section>
);

const HobbyCard = ({ hobby }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--color-bg-raised)' : 'var(--color-bg-base)',
        border: `1px solid ${hovered ? 'var(--color-border-default)' : 'var(--color-border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-2)',
        transition: 'all var(--motion-base)',
        cursor: 'default',
      }}
    >
      <div style={{ color: hovered ? 'var(--color-accent)' : 'var(--color-text-muted)', transition: 'color var(--motion-base)' }}>
        {hobby.icon}
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)' }}>
        {hobby.label}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
        {hobby.desc}
      </p>
    </div>
  );
};

Object.assign(window, { Hobbies, HobbyCard });
