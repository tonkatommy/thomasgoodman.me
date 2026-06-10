// SectionLabel.jsx — typewriter + blinking cursor when scrolled into view

const SectionLabel = ({ text }) => {
  const ref = React.useRef(null);
  const [typed, setTyped] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  // Strip leading "> " for the part we type out (we render the ">" as a static prompt)
  const prompt = '> ';
  const body = text.startsWith(prompt) ? text.slice(prompt.length) : text;

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  React.useEffect(() => {
    if (!started) return;
    let i = 0;
    setTyped('');
    setDone(false);
    const tick = () => {
      i += 1;
      setTyped(body.slice(0, i));
      if (i >= body.length) {
        setDone(true);
        return;
      }
      // Slight humanizing jitter
      const delay = 38 + Math.random() * 50;
      timer = setTimeout(tick, delay);
    };
    let timer = setTimeout(tick, 220);
    return () => clearTimeout(timer);
  }, [started, body]);

  return (
    <span
      ref={ref}
      aria-label={text}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-mono)',
        letterSpacing: 'var(--tracking-wide)',
        display: 'block',
        marginBottom: 'var(--space-2)',
        whiteSpace: 'pre',
        minHeight: '1.4em',
      }}
    >
      <span aria-hidden="true">{prompt}</span>
      <span aria-hidden="true">{started ? typed : ''}</span>
      <span
        aria-hidden="true"
        className="section-label-cursor"
        data-blink={done ? 'true' : 'false'}
        style={{
          display: 'inline-block',
          width: '0.6em',
          marginLeft: '2px',
          background: 'var(--color-accent, var(--color-mono))',
          color: 'transparent',
          verticalAlign: 'baseline',
        }}
      >
        █
      </span>
    </span>
  );
};

// Blink animation (inject once)
if (typeof document !== 'undefined' && !document.getElementById('section-label-style')) {
  const style = document.createElement('style');
  style.id = 'section-label-style';
  style.textContent = `
    @keyframes sectionLabelBlink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .section-label-cursor[data-blink="true"] {
      animation: sectionLabelBlink 1s steps(1, end) infinite;
    }
  `;
  document.head.appendChild(style);
}

Object.assign(window, { SectionLabel });
