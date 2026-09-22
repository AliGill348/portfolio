import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const items = document.querySelectorAll('.section-heading, .about-grid, .feature-card, .experience-intro, .projects-head, .project-group-label, .project-card, .skills-intro, .skill-card, .contact-kicker, .contact h2, .contact-email, .contact-links')
    items.forEach((item) => item.classList.add('reveal'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })

    items.forEach((item) => observer.observe(item))

    let frame = 0
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', progress)
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress)
    }
    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="scroll-progress" aria-hidden="true" />
}
