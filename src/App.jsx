import { useCallback, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollEffects from './components/ScrollEffects.jsx'
import TypewriterHero from './components/TypewriterHero.jsx'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const finishIntro = useCallback(() => setShowIntro(false), [])
  return <>{showIntro ? <TypewriterHero onFinish={finishIntro} /> : null}<ScrollEffects /><Nav /><main><Hero /><About /><Experience /><Projects /><Skills /><Contact /></main><Footer /></>
}
