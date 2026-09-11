const projects = [
  {
    number: '01', title: 'Paysavo', type: 'Fintech platform', date: '2024 — Present', status: 'live', featured: true,
    description: 'Laravel backend services, responsive operational portals, and payment/KYC integrations for a live global wallet, transfer, and crypto platform.',
    tags: ['Laravel', 'REST APIs', 'MySQL', 'Fireblocks', 'Persona'], link: 'https://paysavo.com',
  },
  {
    number: '02', title: 'Fraud Detection', type: 'Transaction monitoring', date: '2025', status: 'live',
    description: 'A real-time fraud detection and transaction monitoring system for a global fintech platform processing 500–5,000 daily transactions across 6+ countries.',
    tags: ['Laravel', 'React', 'Database', 'Bootstrap 5', 'JavaScript'], link: 'https://www.unit21.ai/products/real-time-payment-fraud-prevention',
  },
  {
    number: '03', title: 'BellTell', type: 'Multi-vendor marketplace', date: '2023',
    description: 'A secure, scalable marketplace connecting customers with verified service providers. Led backend delivery and API development.',
    tags: ['PHP', 'SQL', 'WordPress', 'Laravel', 'React'], link: 'https://bellbirdit.com/service/multivendor-ecommerce-website-development-agency',
  },
  {
    number: '04', title: 'AZS', type: 'Operations system', date: 'Turkmenistan',
    description: 'A petrol-station management system with secure database-driven workflows, monitoring functionality, and role-based operational controls.',
    tags: ['Laravel', 'MySQL', 'Role-based access'],
  },
  {
    number: '05', title: 'Heme/Onc QOTD', type: 'Healthcare platform', date: 'API & web workflows',
    description: 'API functionality and web workflows for a daily hematology and oncology question-and-engagement platform.',
    tags: ['Laravel', 'REST APIs'],
  },
  {
    number: '06', title: 'Dasi Charades', type: 'Flutter game', date: 'Mobile backend',
    description: 'Mobile API integration and performance improvements supporting responsive, real-time gameplay interactions.',
    tags: ['API integration', 'Mobile backend'],
  },
  {
    number: '07', title: 'Friend Bank', type: 'Banking platform', date: 'GitHub',
    description: 'A PHP platform for banking-style operations including bill payments, deposits, and withdrawals.',
    tags: ['PHP', 'Laravel'], link: 'https://github.com/AliGill348/FBL',
  },
  {
    number: '08', title: 'FBL App', type: 'TypeScript application', date: 'GitHub',
    description: 'A TypeScript application for Friend Bank Limited, covering bill payments, deposits, and withdrawals.',
    tags: ['TypeScript'], link: 'https://github.com/AliGill348/FBL_App',
  },
]

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-heading"><span className="section-number">03</span><p>Selected work · 08 projects</p></div>
      <div className="projects-head"><h2>Systems built for<br /><em>the real world.</em></h2><p>Platforms where reliability, clarity, and measurable business impact mattered most.</p></div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title} style={{ '--card-index': index % 2 }}>
            <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
            <div className="project-copy">
              <div className="project-status"><span>{project.date}</span>{project.status === 'live' ? <i><b /> Live</i> : null}</div>
              <h3>{project.title}</h3><p>{project.description}</p>
            </div>
            <div className="project-bottom"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>↗</a> : <span className="private-label">Private work</span>}</div>
            <span className="card-glow" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
