import './App.css'

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
    text: 'BLV-focused AI tools for context-aware obstacle detection, spatial reasoning, and assistive perception.',
  },
  {
    title: 'PoseLab',
    text: '2D/3D human pose estimation tools using GNNs and Transformers for reliable human motion understanding.',
  },
  {
    title: 'LLM ShieldBench',
    text: 'Chatbot cybersecurity and AI safety evaluation dashboards.',
  },
  {
    title: 'Paper2Code Kits',
    text: 'PyTorch templates, dataset processing tools, and reproducible experiment dashboards.',
  },
]

const roadmap = [
  'Finalize Vedansh Labs identity',
  'Update GitHub profile README',
  'Update LinkedIn headline/about',
  'Update portfolio hero section',
  'Create SmartSight Lite repo',
  'Add professional README',
  'Build MVP demo',
  'Post weekly progress on LinkedIn',
  'Add demo video',
  'Repeat with PoseLab and LLM ShieldBench',
]

function App() {
  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-primary" aria-hidden="true"></div>
        <div className="hero-glow hero-glow-secondary" aria-hidden="true"></div>

        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand-mark" href="#">
            <span className="brand-sigil">VL</span>
            <span>Vedansh Labs</span>
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#">GitHub</a>
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
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              Explore Projects
            </a>
            <a className="button button-secondary" href="#">
              View GitHub
            </a>
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

      <section className="section-band" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div className="section-kicker">Projects</div>
          <h2 id="projects-title">Open systems moving from prototype to proof.</h2>
        </div>
        <div className="card-grid project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-chip">Research Build</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
        <div className="section-heading">
          <div className="section-kicker">Roadmap</div>
          <h2 id="roadmap-title">A practical path for building in public.</h2>
        </div>
        <ol className="roadmap-list">
          {roadmap.map((item, index) => (
            <li className="roadmap-item" key={item}>
              <span>{String(index + 6).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="site-footer">
        <div>
          <h2>Vedansh Labs</h2>
          <p>Building human-centered AI from research to reality.</p>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">Email</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
