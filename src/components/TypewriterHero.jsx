import { useEffect, useState } from 'react'

export default function TypewriterHero({ onFinish }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onFinish()
      return undefined
    }
    document.body.classList.add('intro-active')
    const exitTimer = window.setTimeout(() => setLeaving(true), 3500)
    return () => {
      document.body.classList.remove('intro-active')
      window.clearTimeout(exitTimer)
    }
  }, [onFinish])

  useEffect(() => {
    if (!leaving) return undefined
    const finishTimer = window.setTimeout(onFinish, 950)
    return () => window.clearTimeout(finishTimer)
  }, [leaving, onFinish])

  return (
    <div className={`intro intro-editorial ${leaving ? 'is-leaving' : ''}`} role="dialog" aria-label="Portfolio introduction">
      <div className="intro-brand"><span>AH</span>GILL</div>
      <button className="intro-skip" type="button" onClick={() => setLeaving(true)}>Skip intro ↗</button>
      <div className="intro-overline"><span /> Backend · Integrations · Delivery</div>
      <div className="intro-statement" aria-live="polite">
        <div className="intro-line line-one"><span>I’m Ali Gill.</span></div>
        <div className="intro-line line-two"><span>Laravel backend developer.</span></div>
        <div className="intro-line line-three"><span>I build systems that <em>ship reliably.</em></span></div>
      </div>
      <div className="intro-footer"><span>Lahore · Pakistan</span><span>Portfolio loading</span></div>
      <div className="intro-track"><span /></div>
    </div>
  )
}
