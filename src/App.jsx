import './App.css'

const links = {
  githubProfile: null,
  linkedInProfile: null,
  youtubeChannel: null,
  email: null,
  projects: {
    'LLM ShieldBench': null,
    'SmartSight / Canvox': null,
    PoseLab: null,
    'Paper2Code Kits': null,
  },
}

const pillars = [
  {
    title: 'Accessible AI',
    text: 'AI tools that help people navigate, learn, and interact.',
  },
  {
    title: 'Human Understanding',
    text: 'AI that understands human pose, motion, behavior, and context.',
  },
  {
    title: 'Trustworthy Intelligence',
    text: 'AI systems that are safer, more reliable, and easier to evaluate.',
  },
  {
    title: 'Open Research Tools',
    text: 'Reusable tools for researchers, engineers, and students.',
  },
]

const projects = [
  {
    title: 'SmartSight / Canvox',
    tag: 'Assistive AI',
    text: 'BLV-focused AI tools for context-aware obstacle detection, spatial reasoning, and assistive perception.',
  },
  {
    title: 'PoseLab',
    tag: 'Human Motion',
    text: '2D/3D human pose estimation tools using GNNs and Transformers for reliable human motion understanding.',
  },
  {
    title: 'LLM ShieldBench',
    tag: 'AI Safety',
    text: 'Chatbot cybersecurity and AI safety evaluation dashboards.',
  },
  {
    title: 'Paper2Code Kits',
    tag: 'Research Tools',
    text: 'PyTorch templates, dataset processing tools, and reproducible experiment dashboards.',
  },
]

const featuredWork = [
  {
    title: 'LLM ShieldBench',
    text: 'AI safety evaluation dashboard for testing chatbot behavior.',
  },
  {
    title: 'SmartSight / Canvox',
    text: 'Context-aware assistive perception for BLV-focused navigation support.',
  },
  {
    title: 'PoseLab',
    text: '2D/3D human pose estimation experiments using GNNs and Transformers.',
  },
]

function ExternalLink({ href, children, className, disabledLabel, comingSoonLabel }) {
  if (!href) {
    const label = disabledLabel || children
    const accessibilityLabel = comingSoonLabel || `${label} link coming soon`

    return (
      <span
        className={className}
        role="link"
        aria-disabled="true"
        aria-label={accessibilityLabel}
        title={accessibilityLabel}
      >
        {label}
      </span>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function CardActions({ projectTitle }) {
  const projectLink = links.projects[projectTitle]

  return (
    <div className="card-actions">
      <ExternalLink
        href={projectLink}
        disabledLabel="Coming soon"
        comingSoonLabel="Project link coming soon"
      >
        {projectLink ? 'View Project' : 'Coming soon'}
      </ExternalLink>
      <ExternalLink
        href={projectLink}
        disabledLabel="GitHub soon"
        comingSoonLabel="GitHub link coming soon"
      >
        GitHub
      </ExternalLink>
    </div>
  )
}

function App() {
  return (
    <main className="site-shell" id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-primary" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-secondary" aria-hidden="true"></div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#top">
            <span className="brand-sigil">VL</span>
            <span>Vedansh Labs</span>
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <ExternalLink
              href={links.githubProfile}
              disabledLabel="GitHub soon"
              comingSoonLabel="GitHub link coming soon"
            >
              GitHub
            </ExternalLink>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Vedansh Tembhre - AI Researcher-Builder</p>
          <h1 id="hero-title">Vedansh Labs</h1>
          <p className="hero-tagline">
            Building human-centered AI from research to reality.
          </p>
          <p className="hero-copy">
            Open-source, research-grade AI systems for accessibility, human
            understanding, and trustworthy intelligence.
          </p>
          <p className="founder-line">
            Created by Vedansh Tembhre, a PhD student and AI researcher-builder
            focused on human-centered spatial intelligence.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              Explore Projects
            </a>
            <ExternalLink
              className="button button-secondary"
              href={links.githubProfile}
              disabledLabel="GitHub soon"
              comingSoonLabel="GitHub link coming soon"
            >
              View GitHub
            </ExternalLink>
          </div>
        </div>

        <div className="lab-visual" aria-hidden="true">
          <div className="orbit orbit-large"></div>
          <div className="orbit orbit-small"></div>
          <div className="signal-card signal-card-one">
            <span>Assistive Perception</span>
            <strong>Spatial AI</strong>
          </div>
          <div className="signal-card signal-card-two">
            <span>Evaluation Layer</span>
            <strong>Trust Metrics</strong>
          </div>
          <div className="core-node"></div>
        </div>
      </section>

      <section className="identity-section section-band" aria-labelledby="identity-title">
        <div className="section-kicker">Public Identity</div>
        <div className="section-heading">
          <h2 id="identity-title">Research-grade AI, built for real people.</h2>
          <p>
            Vedansh Labs turns advanced AI ideas into practical open-source
            systems, demos, benchmarks, and research tools that engineers,
            students, researchers, and real users can actually use.
          </p>
        </div>
      </section>

      <section className="section-band" aria-labelledby="pillars-title">
        <div className="section-heading compact">
          <div className="section-kicker">Core Pillars</div>
          <h2 id="pillars-title">The research directions behind the lab.</h2>
        </div>
        <div className="card-grid pillar-grid">
          {pillars.map((pillar) => (
            <article className="info-card" key={pillar.title}>
              <span className="card-line"></span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band featured-section" aria-labelledby="featured-title">
        <div className="section-heading compact">
          <div className="section-kicker">Featured Work</div>
          <h2 id="featured-title">Featured work from the lab.</h2>
          <p>A quick look at the systems currently shaping Vedansh Labs.</p>
        </div>
        <div className="card-grid featured-grid">
          {featuredWork.map((work) => (
            <article className="proof-card" key={work.title}>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
              <CardActions projectTitle={work.title} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div className="section-kicker">Projects</div>
          <h2 id="projects-title">Open systems moving from prototype to proof.</h2>
        </div>
        <div className="card-grid project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-chip">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <CardActions projectTitle={project.title} />
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h2>Vedansh Labs</h2>
          <p>Building human-centered AI from research to reality.</p>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <ExternalLink
            href={links.githubProfile}
            disabledLabel="GitHub soon"
            comingSoonLabel="GitHub link coming soon"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href={links.linkedInProfile}
            disabledLabel="LinkedIn soon"
            comingSoonLabel="LinkedIn link coming soon"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href={links.youtubeChannel}
            disabledLabel="YouTube soon"
            comingSoonLabel="YouTube link coming soon"
          >
            YouTube
          </ExternalLink>
          <ExternalLink
            href={links.email ? `mailto:${links.email}` : null}
            disabledLabel="Email soon"
            comingSoonLabel="Email link coming soon"
          >
            Email
          </ExternalLink>
        </nav>
      </footer>
    </main>
  )
}

export default App
