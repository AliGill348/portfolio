const groups = [
  { label: 'Fintech', projects: [
    { title: 'Paysavo', type: 'Fintech Platform', description: 'Backend delivery for a live platform spanning wallets, transfers, bill payments, KYC, and crypto services.', stats: ['8+ APIs', 'Live platform'], tags: ['Laravel', 'REST APIs', 'MySQL', 'Fireblocks', 'Persona'], live: 'https://paysavo.com' },
    { title: 'Fraud Detection & Transaction Monitoring', type: 'Risk System', description: 'Real-time monitoring workflows for a global fintech platform, designed to support investigation and safer transaction operations.', stats: ['500–5,000 daily txns', '6+ countries'], tags: ['Laravel', 'React', 'MySQL', 'Bootstrap 5', 'JavaScript'], private: true },
  ] },
  { label: 'Platforms', projects: [
    { title: 'Heme/Onc Question of the Day', type: 'Healthcare Platform', description: 'API functionality and web workflows for a daily hematology and oncology question-and-engagement platform.', stats: ['API workflows'], tags: ['Laravel', 'REST APIs', 'MySQL'], private: true },
    { title: 'BellTell', type: 'Multi-Vendor Marketplace', description: 'A scalable marketplace connecting customers with verified service providers, with backend delivery and API development.', stats: ['Multi-vendor', 'Role-based'], tags: ['PHP', 'Laravel', 'SQL', 'React'], private: true },
    { title: 'AZS Petrol Station Management System', type: 'Operations System', description: 'Secure, database-driven petrol-station workflows with monitoring functionality and role-based operational controls.', stats: ['Operations', 'Role-based'], tags: ['Laravel', 'MySQL', 'Authentication'], private: true },
  ] },
  { label: 'Open Source', projects: [
    { title: 'FBL', type: 'Banking Platform', description: 'A PHP application for banking-style workflows including bill payments, deposits, and withdrawals.', stats: ['GitHub'], tags: ['PHP', 'Laravel'], repo: 'https://github.com/AliGill348/FBL' },
    { title: 'FBL App', type: 'TypeScript Application', description: 'A companion Friend Bank Limited application covering bill payments, deposits, and withdrawals.', stats: ['GitHub'], tags: ['TypeScript'], repo: 'https://github.com/AliGill348/FBL_App' },
  ] },
  { label: 'DevOps', projects: [
    { title: 'Portfolio Deployment Pipeline', type: 'This Website', description: 'Built and deployed with Docker, an Nginx reverse proxy, AWS EC2, and a full GitHub Actions CI/CD pipeline that auto-deploys on push.', stats: ['Auto-deploy', '100% uptime'], tags: ['React', 'Vite', 'Docker', 'Nginx', 'AWS EC2', 'GitHub Actions'], live: '/', repo: 'https://github.com/AliGill348/portfolio' },
  ] },
]

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ '--card-index': index % 2 }}>
      <div className="project-top"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.type}</span></div>
      <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-stats">{project.stats.map((stat) => <span key={stat}>{stat}</span>)}</div></div>
      <div className="project-bottom"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.live ? <a href={project.live} target={project.live === '/' ? undefined : '_blank'} rel={project.live === '/' ? undefined : 'noreferrer'} aria-label={`View ${project.title} live`}>Live ↗</a> : null}{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>Code ↗</a> : null}{project.private ? <span>Private work</span> : null}</div></div>
      <span className="card-glow" aria-hidden="true" />
    </article>
  )
}

export default function Projects() {
  let projectIndex = 0
  return (
    <section className="section projects" id="projects">
      <div className="section-heading"><span className="section-number">03</span><p>Selected work · 08 projects</p></div>
      <div className="projects-head"><h2>Systems built for<br /><em>the real world.</em></h2><p>Backend platforms, integrations, and delivery infrastructure where reliability and clarity matter.</p></div>
      {groups.map((group) => <div className="project-group" key={group.label}><div className="project-group-label"><span>{group.label}</span><small>{String(group.projects.length).padStart(2, '0')} projects</small></div><div className="project-grid">{group.projects.map((project) => { const index = projectIndex; projectIndex += 1; return <ProjectCard project={project} index={index} key={project.title} /> })}</div></div>)}
    </section>
  )
}
