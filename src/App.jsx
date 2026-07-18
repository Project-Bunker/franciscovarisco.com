import { useState } from 'react'

/* ---------------------------------- data ---------------------------------- */

const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Side projects', href: '#side-projects' },
  { label: 'Life', href: '#life' },
  { label: 'Say hi', href: '#hi' },
]

const work = [
  {
    company: 'Askable Labs',
    logo: '/logos/askable-labs.png',
    href: 'https://askablelabs.com',
    roles: [{ title: 'VP Data', period: 'Jan 2026 — present' }],
    blurb:
      'The next generation of AI won’t be unlocked by more compute alone — it needs better human signal. I lead the team capturing multimodal expert work and refining it into the post-training data frontier labs use to push models past their current ceiling.',
  },
  {
    company: 'Askable',
    logo: '/logos/askable.png',
    href: 'https://askable.com',
    roles: [
      { title: 'Head of AI', period: 'Sep 2025 — present' },
      { title: 'Founding Engineer', period: 'Nov 2017 — present' },
      { title: 'Engineering Manager', period: 'May 2022 — Aug 2023' },
    ],
    blurb:
      'First engineer. Helped build a user research platform from an empty repo to a company of a hundred people across three continents — and now drive its AI transformation. Still shipping.',
  },
  {
    company: 'Fupay',
    logo: '/logos/fupay.png',
    roles: [
      { title: 'Software Engineering Manager', period: 'Apr 2021 — Apr 2022' },
    ],
    blurb:
      'Fintech helping Gen Z and millennials manage cash-flow, buy now pay later responsibly, and find personalised rewards.',
  },
  {
    company: 'Orange Digital',
    logo: '/logos/orange-digital.png',
    roles: [{ title: 'Mobile Web Developer', period: 'Jan 2015 — Jan 2019' }],
    blurb:
      'Built some of the agency’s biggest mobile projects and set its mobile development standards.',
  },
  {
    company: 'Yoom',
    logo: '/logos/yoom.svg',
    roles: [{ title: 'Co-Founder', period: 'Mar 2013 — Jan 2016' }],
    blurb:
      'Digital product studio in the south of Brazil — mobile apps and innovative software.',
  },
  {
    company: 'NL Informática',
    logo: '/logos/nl-informatica.png',
    roles: [{ title: 'Developer', period: 'Aug 2008 — Aug 2013' }],
    blurb:
      'Where it all started — Python against Oracle databases in Caxias do Sul, Brazil.',
  },
]

const sideProjects = [
  {
    company: 'Paradise Bunker',
    logo: '/logos/paradise-bunker.png',
    roles: [{ title: 'Creator', period: '2025 — present' }],
    blurb:
      'A local-first organisation of AI agents — named agents with jobs, reporting lines and scheduled workflows, running on local models. My live testbed for a world where systems are designed for agents first, humans second.',
  },
  {
    company: 'Dogdate',
    logo: '/logos/dogdate.png',
    roles: [{ title: 'Co-Founder', period: 'Feb 2021 — Jul 2025' }],
    blurb:
      'A social network that helps your dog make four-legged friends. One date at a time.',
  },
  {
    company: 'Ridable',
    logo: '/logos/ridable.png',
    roles: [{ title: 'Co-Founder', period: 'Jul 2020 — Jan 2025' }],
    blurb:
      'Your best e-bike choice in just a few seconds — without all the noise you don’t need.',
  },
  {
    company: 'Glow',
    logo: '/logos/glow.png',
    roles: [{ title: 'CTO & Co-Founder', period: 'Feb 2023 — Jan 2024' }],
    blurb: 'Give credit to your self-care.',
  },
]

const life = [
  {
    title: 'Lorem ipsum',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    color: 'var(--color-yellow)',
  },
  {
    title: 'Dolor sit amet',
    blurb:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    color: 'var(--color-red)',
  },
  {
    title: 'Consectetur',
    blurb:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    color: 'var(--color-green)',
  },
  {
    title: 'Adipiscing elit',
    blurb:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    color: 'var(--color-blue)',
  },
  {
    title: 'Sed do eiusmod',
    blurb:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    color: 'var(--color-lilac)',
  },
]

const links = [
  { label: 'LinkedIn', handle: 'xicovarisco', href: 'https://linkedin.com/in/xicovarisco' },
  { label: 'GitHub', handle: 'xicovarisco', href: 'https://github.com/xicovarisco' },
  { label: 'X', handle: 'franvarisco', href: 'https://x.com/franvarisco' },
]

/* -------------------------------- components ------------------------------- */

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? 'light',
  )

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  )
}

function Section({ id, label, description, children }) {
  return (
    <section id={id} className="section">
      <header className="section-header">
        <h2 className="section-label">{label}</h2>
        {description && <p className="section-desc">{description}</p>}
      </header>
      {children}
    </section>
  )
}

function CardScroller({ items }) {
  return (
    <ul className="card-scroller">
      {items.map((c) => (
        <li className="scroll-card" key={c.title}>
          {c.img ? (
            <img className="scroll-card-media" src={c.img} alt="" />
          ) : (
            <div className="scroll-card-media" style={{ background: c.color }} />
          )}
          <div className="scroll-card-body">
            <h3 className="scroll-card-title">{c.title}</h3>
            <p className="scroll-card-blurb">{c.blurb}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function ExperienceList({ items }) {
  return (
    <ol className="xp-list">
      {items.map((x) => (
        <li className="xp" key={x.company}>
          <img className="xp-logo" src={x.logo} alt="" width="44" height="44" />
          <div className="xp-body">
            <div className="xp-company">
              {x.href ? <a href={x.href}>{x.company}</a> : x.company}
            </div>
            <ul className="xp-roles">
              {x.roles.map((r) => (
                <li key={r.title}>
                  <span className="xp-role">{r.title}</span>
                  <span className="xp-period">{r.period}</span>
                </li>
              ))}
            </ul>
            <p className="xp-blurb">{x.blurb}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="wordmark" href="#top">
          <span className="wordmark-text">
            I am
            <br />
            <span className="wordmark-name">francisco</span>
          </span>
          <img
            className="wordmark-mark"
            src="/logos/xico-mark.png"
            alt=""
            width="40"
            height="40"
          />
        </a>
        <nav className="nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      <main id="top">
        {/* ------------------------------- hero ------------------------------- */}
        <section className="hero">
          <h1>
            Hey, I am <span className="hero-name">Francisco</span>. I build AI
            systems that do real work — most people call me Xico.
          </h1>
          <p className="hero-sub">
            Twenty years of shipping software, from a Python terminal in Brazil
            to leading AI and data at <a href="https://askable.com">Askable</a>{' '}
            in Brisbane, where I was the first engineer. This site is my corner
            of the internet — work, opinions and the things I care about, with
            no algorithm deciding what you see. Make yourself at home.
          </p>
        </section>

        {/* ------------------------------- work -------------------------------- */}
        <Section
          id="work"
          label="Work"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <ExperienceList items={work} />
        </Section>

        {/* --------------------------- side projects ---------------------------- */}
        <Section
          id="side-projects"
          label="Side projects"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        >
          <ExperienceList items={sideProjects} />
        </Section>

        {/* ------------------------------- life ------------------------------- */}
        <Section
          id="life"
          label="Beyond the terminal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        >
          <CardScroller items={life} />
        </Section>

        {/* ------------------------------ say hi ------------------------------ */}
        <Section
          id="hi"
          label="Say hi, don’t be a stranger"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        >
          <ul className="hi-links">
            {links.map((l) => (
              <li key={l.label}>
                <span className="hi-label">{l.label}</span>
                <a href={l.href}>@{l.handle}</a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <p>Designed with ❤️ by Francisco</p>
      </footer>
    </div>
  )
}
