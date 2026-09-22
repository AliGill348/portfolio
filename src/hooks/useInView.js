import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { rootMargin = '0px', threshold = 0.15 } = options

  useEffect(() => {
    const node = ref.current
    if (!node || isInView) return undefined
    if (!('IntersectionObserver' in window)) {
      setIsInView(true)
      return undefined
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, { rootMargin, threshold })
    observer.observe(node)
    return () => observer.disconnect()
  }, [isInView, rootMargin, threshold])
  return [ref, isInView]
}
