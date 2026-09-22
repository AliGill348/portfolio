import { useCountUp } from '../hooks/useCountUp.js'
import { useInView } from '../hooks/useInView.js'

const stats = [
  { value: 4, suffix: '+', label: 'Years experience' },
  { value: 8, suffix: '+', label: 'API integrations' },
  { value: 5, suffix: '', label: 'Production projects' },
  { value: 100, suffix: '%', label: 'Uptime on current deployment pipeline' },
]

function Stat({ value, suffix, label, active }) {
  const count = useCountUp(value, active)
  return <div className="hero-stat"><strong>{count}{suffix}</strong><span>{label}</span></div>
}

export default function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.35 })
  return (
    <header className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> Available for select opportunities</div>
        <p className="hero-kicker">Ali Hamza Gill</p>
        <h1>Laravel / PHP<br /><em>Backend Developer</em></h1>
        <p className="hero-role">API Integration &amp; DevOps</p>
        <p className="hero-lede">I build dependable Laravel backends, integrate fintech APIs, and ship them through automated cloud deployment pipelines.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↓</span></a>
          <a className="button button-secondary" href="/Ali-Hamza-Gill-Resume.pdf" download>Download Resume <span aria-hidden="true">↓</span></a>
          <a className="button button-link" href="mailto:juttputer802@gmail.com">Email Me <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-proof" ref={statsRef} aria-label="Career statistics">
          {stats.map((stat) => <Stat key={stat.label} {...stat} active={statsInView} />)}
        </div>
      </div>
      <div className="portrait-wrap"><div className="portrait-frame"><img src="/ali-hamza-gill.png" alt="Ali Hamza Gill, Laravel and PHP backend developer" /><span className="portrait-label">Based in Lahore<br />Working worldwide</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
    </header>
  )
}
