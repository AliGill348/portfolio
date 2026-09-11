import { useState } from 'react'

const links = ['About', 'Experience', 'Work', 'Skills', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav" aria-label="Primary navigation"><div className="nav-inner">
      <a href="#top" className="nav-mark" aria-label="Ali Hamza Gill, home"><span>AH</span>GILL</a>
      <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
      <div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map((link) => <a key={link} href={`#${link === 'Work' ? 'projects' : link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</div>
      <a className="nav-cta" href="/Ali-Hamza-Gill-Resume.pdf" download>Resume <span>↗</span></a>
    </div></nav>
  )
}
