import { useEffect, useState } from 'react'

export function useCountUp(target, shouldStart, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!shouldStart) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return undefined
    }
    let frame
    const startedAt = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setValue(Math.round(target * (1 - ((1 - progress) ** 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, shouldStart, target])
  return value
}
