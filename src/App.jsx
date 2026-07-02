import './App.css'

const links = {
  githubProfile: 'https://github.com/Vedansh5545',
  linkedInProfile: 'https://www.linkedin.com/in/vedansh-tembhre/',
  youtubeChannel: 'https://www.youtube.com/@VedanshLabs',
  email: 'vedansh10tembhre@gmail.com',
  projects: {
    'LLM ShieldBench': null,
    'SmartSight / Canvox': null,
    PoseLab: null,
    'Paper2Code Kits': null,
  },
}

const proofItems = [
  {
    title: 'Open-source systems',
    summary: 'Practical AI systems built to be inspected, reused, and improved.',
    details:
      'Vedansh Labs focuses on open codebases and project repositories that turn research ideas into usable systems for students, researchers, engineers, and real users.',
    tags: ['GitHub repos', 'Modular code', 'Research-to-system'],
  },
  {
    title: 'Research-grade demos',
    summary: 'Working demos that make model behavior visible and easier to understand.',
    details:
      'Demos should show how a system behaves in practice - from assistive perception to pose estimation and safety evaluation - instead of only describing the idea.',
    tags: ['Interactive demos', 'Model behavior', 'Practical validation'],
  },
  {
    title: 'Evaluation dashboards',
    summary: 'Interfaces for testing safety, reliability, and system behavior.',
    details:
      'Dashboards help inspect outputs, compare results, analyze risks, and make AI systems easier to evaluate before they are trusted in real workflows.',
    tags: ['LLM ShieldBench', 'Risk analysis', 'Benchmark views'],
  },
  {
    title: 'Reproducible tools',
    summary: 'Templates, processors, and experiment utilities that others can build on.',
    details:
      'Reusable research infrastructure makes experiments easier to reproduce, extend, and teach - especially for students and builders implementing AI papers.',
    tags: ['PyTorch templates', 'Dataset tools', 'Experiment dashboards'],
  },
]

const systems = [
  {
    title: 'Accessible AI & Assistive Systems',
    text: 'Assistive AI systems that help people navigate, understand, and interact with the world more safely.',
    output: 'BLV perception tools and context-aware navigation systems.',
    tags: ['SmartSight', 'Canvox', 'BLV tools', 'Context-aware obstacle detection'],
  },
  {
    title: 'Human Motion & Spatial Understanding',
    text: 'AI systems for understanding human pose, body motion, 3D structure, behavior, and spatial context.',
    output: '3D pose models, motion reasoning tools, and spatial understanding experiments.',
    tags: ['PoseLab', '2D-to-3D pose', 'GNN + Transformer models', 'Multi-hypothesis motion'],
  },
  {
    title: 'Trustworthy AI Evaluation',
    text: 'Benchmarks and dashboards that make model behavior easier to test, inspect, and compare.',
    output: 'LLM safety dashboards, prompt-response risk analysis, and evaluation views.',
    tags: ['LLM ShieldBench', 'Safety dashboards', 'Chatbot security', 'Prompt-response risk'],
  },
  {
    title: 'Open Research Infrastructure',
    text: 'Reusable code, templates, datasets, dashboards, and experiment utilities for practical AI research.',
    output: 'reproducible experiment kits, dataset processors, and research demo repositories.',
    tags: ['Paper2Code Kits', 'PyTorch templates', 'Dataset processing', 'Experiment dashboards'],
  },
]

const projects = [
  {
    title: 'LLM ShieldBench',
    category: 'Trustworthy AI',
    text: 'Safety evaluation dashboards and chatbot security testing tools for prompt-response risk analysis.',
    actions: [
      ['View GitHub', 'https://github.com/Vedansh5545/llm-shieldbench', 'primary'],
      ['Watch Demo', 'https://youtu.be/UtXaATJJ2dI', 'secondary'],
    ],
    metadata: [
      ['Artifact', 'Safety benchmark dashboard'],
      ['Focus', 'LLM safety evaluation'],
      ['Status', 'Public repo + demo available'],
    ],
  },
  {
    title: 'Canvox',
    category: 'Assistive Systems',
    text: 'BLV-focused assistive perception for context-aware obstacle detection and spatial understanding.',
    actions: [
      ['View GitHub', 'https://github.com/hpcclab/Canvox', 'secondary'],
    ],
    metadata: [
      ['Artifact', 'Canvox assistive perception repository'],
      ['Focus', 'Spatial awareness'],
      ['Status', 'Repository available'],
    ],
  },
]

const infrastructure = [
  {
    number: '01',
    title: 'Codebases',
    text: 'Reusable project repositories with clear structure and practical implementation paths.',
  },
  {
    number: '02',
    title: 'Evaluation dashboards',
    text: 'Interfaces for inspecting model outputs, risks, benchmark behavior, and experiment results.',
  },
  {
    number: '03',
    title: 'Experiment utilities',
    text: 'Dataset processors, training helpers, evaluation scripts, and reproducible workflows.',
  },
  {
    number: '04',
    title: 'Notes and implementation kits',
    text: 'Research notes and practical guides that help students, engineers, and researchers extend the work.',
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

  if (href.startsWith('mailto:')) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function TagList({ tags }) {
  return (
    <div className="tag-list" aria-label="Project metadata">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

function SystemsVisual() {
  return (
    <div className="systems-visual" aria-label="CSS systems lab visual">
      <article className="visual-panel motion-panel">
        <div className="panel-header">
          <span className="panel-dot human-dot"></span>
          <span>Human Motion</span>
        </div>
        <div className="motion-stage" aria-hidden="true">
          <span className="joint head"></span>
          <span className="joint shoulder-left"></span>
          <span className="joint shoulder-right"></span>
          <span className="joint hip-left"></span>
          <span className="joint hip-right"></span>
          <span className="joint knee-left"></span>
          <span className="joint knee-right"></span>
          <span className="bone spine"></span>
          <span className="bone shoulder-bar"></span>
          <span className="bone hip-bar"></span>
          <span className="bone leg-left"></span>
          <span className="bone leg-right"></span>
          <span className="trajectory trajectory-one"></span>
          <span className="trajectory trajectory-two"></span>
        </div>
      </article>

      <article className="visual-panel spatial-panel">
        <div className="panel-header">
          <span className="panel-dot spatial-dot"></span>
          <span>Spatial AI</span>
        </div>
        <div className="spatial-map" aria-hidden="true">
          <span className="path-line"></span>
          <span className="map-marker start"></span>
          <span className="map-marker target"></span>
          <span className="obstacle obstacle-one"></span>
          <span className="obstacle obstacle-two"></span>
          <span className="obstacle obstacle-three"></span>
        </div>
      </article>

      <article className="visual-panel trust-panel">
        <div className="panel-header">
          <span className="panel-dot trust-dot"></span>
          <span>Trust Evaluation</span>
        </div>
        <div className="eval-rows" aria-hidden="true">
          <div className="eval-row">
            <span>Prompt risk</span>
            <strong style={{ '--bar-width': '64%' }}></strong>
          </div>
          <div className="eval-row">
            <span>Safety check</span>
            <strong style={{ '--bar-width': '82%' }}></strong>
          </div>
          <div className="eval-row">
            <span>Traceability</span>
            <strong style={{ '--bar-width': '72%' }}></strong>
          </div>
        </div>
      </article>
    </div>
  )
}

function App() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header" aria-label="Site header">
        <a className="brand-mark" href="#top" aria-label="Vedansh Labs home">
          <span className="brand-sigil">VL</span>
          <span>Vedansh Labs</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#systems">Systems</a>
          <a href="#work">Work</a>
          <ExternalLink href={links.githubProfile}>
            GitHub
          </ExternalLink>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="precision-grid" aria-hidden="true"></div>
        <div className="hero-content">
          <p className="eyebrow">HUMAN-CENTERED SYSTEMS LAB</p>
          <h1 id="hero-title">Vedansh Labs</h1>
          <p className="hero-tagline">
            Building human-centered AI from research to reality.
          </p>
          <p className="hero-copy">
            I build open-source, research-grade AI systems that understand
            humans, motion, space, and trust - focused on accessibility,
            reliable perception, and trustworthy intelligence.
          </p>
          <p className="founder-line">
            Created by Vedansh Tembhre - AI Researcher-Builder.
          </p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#systems">
              View Systems
            </a>
            <a className="button button-secondary" href="#work">
              See Featured Work
            </a>
          </div>
        </div>
        <SystemsVisual />
      </section>

      <section className="proof-strip" aria-labelledby="lab-outputs-title">
        <div className="section-heading compact">
          <p className="section-kicker">Lab Outputs</p>
          <h2 id="lab-outputs-title">What Vedansh Labs turns research into.</h2>
          <p>
            A compact view of the artifacts behind the lab - systems, demos,
            dashboards, and reusable tools that make AI research easier to
            inspect, test, and extend.
          </p>
        </div>
        <div className="proof-grid">
          {proofItems.map((item) => (
            <details className="proof-card" key={item.title}>
              <summary>
                <span className="proof-marker" aria-hidden="true"></span>
                <span>
                  <strong>{item.title}</strong>
                  <span>{item.summary}</span>
                </span>
              </summary>
              <div className="proof-card-body">
                <p>{item.details}</p>
                <div className="lab-output-tags" aria-label={`${item.title} tags`}>
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-band systems-section" id="systems" aria-labelledby="systems-title">
        <div className="section-heading">
          <p className="section-kicker">Lab Domains</p>
          <h2 id="systems-title">Systems that understand humans, space, and trust.</h2>
          <p>
            Vedansh Labs connects human-centered AI research with working
            systems, demos, benchmarks, and reusable tools.
          </p>
        </div>
        <div className="systems-grid">
          {systems.map((system) => (
            <article className="system-card" key={system.title}>
              <span className="system-glyph" aria-hidden="true"></span>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
              <p className="system-output">
                <strong>Output:</strong> {system.output}
              </p>
              <TagList tags={system.tags} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-band work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-kicker">Featured Work</p>
          <h2 id="work-title">Featured work from the lab.</h2>
          <p>
            Concrete systems, benchmarks, and research tools moving from
            prototype to proof.
          </p>
        </div>
        <div className="project-grid">
          <article className="project-card project-card-primary">
            <p className="project-category">{projects[0].category}</p>
            <h3>{projects[0].title}</h3>
            <p>{projects[0].text}</p>
            <dl className="project-metadata" aria-label={`${projects[0].title} metadata`}>
              {projects[0].metadata.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="project-actions" aria-label={`${projects[0].title} links`}>
              {projects[0].actions.map(([label, href, variant]) => (
                <a
                  className={`project-link project-link-${variant}`}
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              ))}
            </div>
          </article>

          <div className="supporting-projects" aria-label="Supporting featured work">
            {projects.slice(1).map((project) => (
              <article className="project-card project-card-compact" key={project.title}>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <dl className="project-metadata compact" aria-label={`${project.title} metadata`}>
                {project.metadata.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="project-actions compact" aria-label={`${project.title} links`}>
                {project.actions.map(([label, href, variant]) => (
                  <a
                    className={`project-link project-link-${variant}`}
                    href={href}
                    key={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band infrastructure-section" aria-labelledby="infrastructure-title">
        <div className="infrastructure-layout">
          <div className="section-heading infrastructure-copy">
            <p className="section-kicker">Open Research Infrastructure</p>
            <h2 id="infrastructure-title">Built to be inspected, reused, and extended.</h2>
            <p>
              Vedansh Labs focuses on practical research artifacts &mdash; codebases,
              dashboards, dataset utilities, experiment scripts, and implementation
              notes that make advanced AI ideas easier to test, reproduce, and build on.
            </p>
          </div>
          <div className="artifact-stack" aria-label="Research artifact stack">
            <h3>Research artifact stack</h3>
            <div className="artifact-rows">
              {infrastructure.map((item) => (
                <article className="artifact-row" key={item.title}>
                  <span className="artifact-number">{item.number}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section" aria-labelledby="founder-title">
        <div className="founder-card">
          <div>
            <p className="section-kicker">FOUNDER</p>
            <h2 id="founder-title">Built by Vedansh Tembhre.</h2>
            <p>
              Vedansh Tembhre is a PhD CS student and AI researcher-builder
              creating open-source, research-grade systems for human-centered
              intelligence &mdash; with a focus on accessibility, computer
              vision, 3D human motion understanding, and trustworthy AI
              evaluation.
            </p>
          </div>
          <div className="founder-identity" aria-label="Founder identity">
            <div className="founder-identity-header">
              <strong>Vedansh Tembhre</strong>
              <span>AI Researcher-Builder</span>
              <span>Creator of Vedansh Labs</span>
            </div>
            <div className="founder-detail-group">
              <h3>Focus:</h3>
              <ul>
                <li>Human-centered AI</li>
                <li>Computer vision</li>
                <li>3D motion understanding</li>
                <li>Trustworthy evaluation</li>
              </ul>
            </div>
            <div className="founder-detail-group">
              <h3>Currently building:</h3>
              <ul>
                <li>LLM ShieldBench</li>
                <li>Canvox</li>
                <li>Open research infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h2>Vedansh Labs</h2>
          <p>Building human-centered AI from research to reality.</p>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <ExternalLink href={links.githubProfile}>
            GitHub
          </ExternalLink>
          <ExternalLink href={links.linkedInProfile}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={links.youtubeChannel}>
            YouTube
          </ExternalLink>
          <ExternalLink href={`mailto:${links.email}`}>
            Email
          </ExternalLink>
        </nav>
      </footer>
    </main>
  )
}

export default App
