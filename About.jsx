// About.jsx — thomasgoodman.me

const About = () => (
  <section
    id="about"
    data-screen-label="About"
    style={{ padding: 'var(--section-py) clamp(24px, 5vw, 96px)', background: 'var(--color-bg-surface)' }}
  >
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,480px)', gap: 'var(--space-16)', alignItems: 'start' }} className="about-grid">
      {/* Left: bio */}
      <div>
        <SectionLabel text="> 01. about" />
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-4xl)',
          color: 'var(--color-text-primary)', letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)', paddingBottom: 'var(--space-4)',
          position: 'relative', display: 'inline-block', marginBottom: 'var(--space-8)',
        }}>
          About Me
          <span style={{ position: 'absolute', bottom: 0, left: 0, width: 24, height: 2, background: 'var(--color-accent)', display: 'block' }}></span>
        </h2>

        {[
          "Hi, I'm Tommy Goodman, a full-stack developer based in Auckland, New Zealand.",
          "Before moving into software, I spent 15 years as an Avionics Technician with the Royal New Zealand Air Force, maintaining safety-critical aircraft systems. That background gave me a real discipline for precision, documentation, and working in high-stakes environments.",
          "I'm now looking for junior to intermediate full-stack developer roles, ideally remote or hybrid, where I can keep building on the solid foundation I've developed over the past couple of years.",
          "At Mission Ready HQ I built full-stack applications using Node, Express, React, and MySQL, set up Docker environments and CI/CD pipelines with GitHub Actions, and worked in an Agile team.",
          "I also completed a mentored internship at PolicyCheck, where I integrated a third-party email platform as a Docker service into a live Next.js application.",
          "During my Air Force career, I built two internal web applications from scratch, including a key press management system that replaced a fully manual paper process and cut tracking time by around 80%.",
          "What I bring that most junior devs don't is real-world discipline - 15 years of working to strict standards where mistakes had consequences. I'm methodical, I don't cut corners on documentation, and I know how to stay calm and work through problems systematically. I pick things up quickly, and I genuinely care about doing the work properly.",
          "I'm looking for a team that values reliability and growth, somewhere I can contribute from day one while continuing to develop.",
        ].map((para, i) => (
          <p key={i} style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)',
            marginBottom: i < 7 ? 'var(--space-4)' : 0,
          }}>
            {para}
          </p>
        ))}
      </div>

      {/* Right: terminal window */}
      <div style={{
        background: 'var(--color-bg-raised)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'var(--color-bg-surface)',
          padding: '10px 14px',
          display: 'flex', gap: 6, alignItems: 'center',
          borderBottom: '1px solid var(--color-border-subtle)',
        }}>
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }}></div>
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }}></div>
          <span style={{ fontSize: 11, color: 'var(--color-text-muted)', marginLeft: 8 }}>tommy@local ~ </span>
        </div>
        {/* Terminal content */}
        <div style={{ padding: '18px 20px', fontSize: 13, lineHeight: 1.75 }}>
          {[
            { prompt: true, cmd: 'cat experience.md' },
            { out: '15+ yrs  RNZAF Avionics Technician' },
            { out: '10 wks   PolicyCheck — Software Developer' },
            { out: 'ongoing  Mission Ready HQ — Full-Stack Dev' },
            null,
            { prompt: true, cmd: 'cat values.txt' },
            { out: 'Precision. Documentation. Reliability.' },
            { out: 'No corners cut. No excuses made.' },
            null,
            { prompt: true, cmd: 'echo $LOOKING_FOR' },
            { out: 'Junior-to-intermediate full-stack roles' },
            { out: 'Remote first. Hybrid OK. Auckland/NZ.' },
            null,
            { prompt: true, cmd: 'echo $STATUS', blinking: true },
          ].map((line, i) => {
            if (line === null) return <div key={i} style={{ height: 8 }}></div>;
            if (line.prompt) return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <span style={{ color: 'var(--color-accent)', marginRight: 6 }}>$</span>
                <span style={{ color: 'var(--color-text-primary)' }}>{line.cmd}</span>
                {line.blinking && (
                  <span style={{
                    display: 'inline-block', width: 7, height: '1em',
                    background: 'var(--color-accent)',
                    animation: 'blink 1s step-end infinite',
                    verticalAlign: 'text-bottom', marginLeft: 6,
                  }}></span>
                )}
              </div>
            );
            return (
              <div key={i} style={{ color: 'var(--color-text-secondary)', paddingLeft: 16 }}>
                {line.out}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { About });
