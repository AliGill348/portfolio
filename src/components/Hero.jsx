export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Available for select opportunities</div>
        <p className="hero-kicker">Full-stack Developer · Laravel / PHP Specialist</p>
        <h1>Building the systems<br />behind <em>every click.</em></h1>
        <p className="hero-lede">I’m Ali, a full-stack developer in Lahore. I turn business ideas into polished web products, resilient APIs, and clean Laravel systems built for the real world.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span>↓</span></a><a className="button button-link" href="mailto:juttputer802@gmail.com">Let’s talk <span>↗</span></a></div>
        <div className="hero-proof"><div><strong>4+</strong><span>Years building<br />web products</span></div><div><strong>8+</strong><span>API integrations<br />coordinated</span></div><div><strong>6+</strong><span>Countries served<br />through fintech</span></div></div>
      </div>
      <div className="portrait-wrap"><div className="portrait-frame"><img src="/ali-hamza-gill.png" alt="Ali Hamza Gill, full-stack Laravel and PHP developer" /><span className="portrait-label">Based in Lahore<br />Working worldwide</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
    </header>
  )
}
