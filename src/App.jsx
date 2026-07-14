import { useEffect, useState } from 'react'

/* ---------------------------------- data ---------------------------------- */

const nav = [
  { label: 'Now', href: '#now' },
  { label: 'Work', href: '#work' },
  { label: 'Notes', href: '#notes' },
  { label: 'Life', href: '#life' },
  { label: 'Say hi', href: '#hi' },
]

const now = [
  {
    role: 'VP Data · Askable Labs',
    detail:
      'I lead the team turning multimodal expert work into post-training data for frontier AI labs. Real people doing real work, captured end-to-end, refined into something a model can learn from.',
  },
  {
    role: 'Head of AI · Askable',
    detail:
      'Rewiring how a hundred-person company operates with AI in the loop — tools, workflows and habits, not slideware.',
  },
  {
    role: 'Paradise Bunker',
    detail:
      'Nights and weekends: a local-first organisation of AI agents — chief of staff, research analyst, coding lead — that runs my research and ops while I sleep.',
  },
]

const work = [
  {
    year: '2026',
    name: 'Askable Labs',
    tag: 'Post-training data',
    blurb:
      'Expert work as training data. We capture how skilled humans actually think and operate, and turn it into the signal frontier models are missing.',
  },
  {
    year: '2025',
    name: 'Paradise Bunker',
    tag: 'Agents · local models',
    blurb:
      'An agent organisation, not a chatbot. Named agents with jobs, reporting lines and scheduled workflows, running on local models. My live testbed for a world where systems are designed for agents first, humans second.',
  },
  {
    year: '2017',
    name: 'Askable',
    tag: 'Founding engineer → now',
    blurb:
      'Joined as the first engineer. Helped set the technical direction and build a user research platform from an empty repo to a company of a hundred people. Still shipping.',
    href: 'https://askable.com',
  },
  {
    year: '2010s',
    name: 'Five startups',
    tag: 'Zero to one, five times',
    blurb:
      'Dogdate, Ridable, Glow, Yoom, LoopModules — co-founded them all. Some worked, some didn’t. Every one taught me more than a safe job would have.',
  },
  {
    year: '∞',
    name: 'Open source',
    tag: 'Code',
    blurb:
      'Small tools shared freely — React components, React Native AR experiments, and whatever else escapes the lab.',
    href: 'https://github.com/xicovarisco',
  },
]

const notes = [
  {
    title: 'Agents don’t need better chat. They need a workplace.',
    body:
      'My thesis for 2026: agentic AI expands horizontally across teams, and the winners will design systems for agents first, humans second. Files, queues and cron beat another chat window.',
  },
  {
    title: 'Model improvements are 10x, not 2x.',
    body:
      'If you plan for incremental gains you will be wrong in an expensive way. Build things that get dramatically better when the models do — and assume they will.',
  },
  {
    title: 'Skip the course.',
    body:
      'Nobody learns AI in a classroom. Open the tool, hand it real work, watch where it fails, adjust. Daily contact with the frontier beats any certificate.',
  },
  {
    title: 'Go where the frontier is.',
    body:
      'I flew to San Francisco for GTC and packed 37 meetings into a week — researchers, founders, people years ahead of me. The fastest way to get better is proximity to people who already are.',
  },
]

const life = [
  'Grew up in Brazil. Started out writing Python against Oracle databases; Brisbane has been home for years now.',
  'Two languages — English and Portuguese. Terse in both when it matters.',
  'Eleven years volunteering with the Queensland Government, including the G20 in Brisbane.',
  'Allergic to meetings, manual repetition, and justifying decisions to people who were never going to move.',
]

const uses = ['Claude Code', 'llama.cpp', 'Obsidian', 'React', 'Vercel']

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/xicovarisco' },
  { label: 'GitHub', href: 'https://github.com/xicovarisco' },
]

/* -------------------------------- components ------------------------------- */

function BrisbaneClock() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-AU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Australia/Brisbane',
    }).format(new Date())

  const [time, setTime] = useState(fmt)

  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="clock" title="My local time">
      Brisbane {time}
    </span>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? 'auto',
  )

  const toggle = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const current =
      theme === 'auto' ? (prefersDark ? 'dark' : 'light') : theme
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
    >
      ☀︎/☾
    </button>
  )
}

function Section({ id, label, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-label">{label}</h2>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="wordmark" href="#top">
          xico
        </a>
        <nav className="nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-meta">
          <BrisbaneClock />
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        {/* ------------------------------- hero ------------------------------- */}
        <section className="hero">
          <p className="hero-hello">G’day, I’m Xico 👋</p>
          <h1>
            I build AI systems
            <br />
            that do real work.
          </h1>
          <p className="hero-lead">
            Francisco Varisco — twenty years of shipping software, from a
            Python terminal in Brazil to leading AI and data at{' '}
            <a href="https://askable.com">Askable</a> in Brisbane, where I was
            the first engineer. I still write code, and I intend to keep it
            that way.
          </p>
          <p className="hero-sub">
            This site is my corner of the internet — work, opinions and the
            things I care about, with no algorithm deciding what you see. Make
            yourself at home.
          </p>
        </section>

        {/* ------------------------------- now -------------------------------- */}
        <Section id="now" label="Now">
          <ul className="now-list">
            {now.map((n) => (
              <li key={n.role}>
                <span className="now-role">{n.role}</span>
                <span className="now-detail">{n.detail}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ------------------------------- work -------------------------------- */}
        <Section id="work" label="Work">
          <ol className="timeline">
            {work.map((w) => (
              <li className="entry" key={w.name}>
                <span className="entry-year">{w.year}</span>
                <div className="entry-body">
                  <div className="entry-head">
                    {w.href ? (
                      <a href={w.href} className="entry-title">
                        {w.name} <span className="entry-arrow">↗</span>
                      </a>
                    ) : (
                      <span className="entry-title">{w.name}</span>
                    )}
                    <span className="entry-tag">{w.tag}</span>
                  </div>
                  <p className="entry-blurb">{w.blurb}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* --------------------------- field notes ---------------------------- */}
        <Section id="notes" label="Field notes">
          <p className="section-intro">
            Short, opinionated and subject to revision when the evidence
            changes.
          </p>
          <div className="notes">
            {notes.map((n) => (
              <article className="note" key={n.title}>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* ------------------------------- life ------------------------------- */}
        <Section id="life" label="Beyond the terminal">
          <ul className="life-list">
            {life.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="uses">
            Daily tools:{' '}
            {uses.map((u, i) => (
              <span key={u}>
                <span className="uses-item">{u}</span>
                {i < uses.length - 1 && ' · '}
              </span>
            ))}
          </p>
        </Section>

        {/* ------------------------------ say hi ------------------------------ */}
        <Section id="hi" label="Say hi">
          <div className="postcard">
            <p className="postcard-copy">
              No newsletter, no funnel. If you’re building something
              interesting — or you know something I don’t about agents,
              post-training data or local models — I want to hear it.
            </p>
            <div className="postcard-links">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="postcard-link">
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>
          Designed and built in Brisbane. React on Vercel — no tracking, no
          cookies. © {new Date().getFullYear()} Francisco Varisco ·{' '}
          <a href="https://github.com/Project-Bunker/franciscovarisco.com">
            view source
          </a>
        </p>
      </footer>
    </div>
  )
}
