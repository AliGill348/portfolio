const features = [
  { icon: '⚡', label: 'Speed', title: 'Performance-minded', copy: 'Optimize MySQL queries and indexes to reduce slow-query incidents in production.' },
  { icon: '◈', label: 'Reliability', title: 'Built for live systems', copy: 'Coordinate 8+ live payment, KYC, and crypto integrations while protecting service continuity.' },
  { icon: '↻', label: 'Automation', title: 'Push-to-production', copy: 'Built a CI/CD pipeline that uses GitHub Actions to deploy automatically to AWS EC2 on every push.' },
  { icon: '⌁', label: 'Domain Depth', title: 'Fintech fluency', copy: 'Hands-on experience with wallets, transfers, bill payments, KYC, and crypto exchange workflows.' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading"><span className="section-number">01</span><p>About me</p></div>
      <div className="about-grid">
        <h2>I turn complex backend requirements into <em>reliable products.</em></h2>
        <div className="about-copy"><p>Across 4+ years of development, I have grown from agency delivery into leading backend work and API coordination for a live fintech platform.</p><p>My work sits where product thinking meets careful engineering: maintainable Laravel architecture, efficient MySQL queries, defensive integrations, and repeatable production deployments.</p><div className="principles"><span>Clean architecture</span><span>Ownership</span><span>Production reliability</span></div></div>
      </div>
      <div className="feature-grid" aria-label="Engineering strengths">
        {features.map((feature, index) => <article className="feature-card" key={feature.label} style={{ '--feature-index': index }}><div className="feature-icon" aria-hidden="true">{feature.icon}</div><p className="feature-label">{feature.label}</p><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}
      </div>
    </section>
  )
}
