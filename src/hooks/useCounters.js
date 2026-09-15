import { useEffect } from 'react'

/**
 * Animates number counters in .hero-stat-number elements
 * when they scroll into view.
 */
export function useCounters(selector) {
  useEffect(() => {
    const counters = document.querySelectorAll(selector)
    if (!counters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const rawText = el.textContent
          const isPercent = rawText.includes('%')
          const target = parseInt(rawText.replace(/[^0-9]/g, ''), 10)
          if (isNaN(target)) return

          let count = 0
          const duration = 2000
          const step = Math.ceil(target / (duration / 16))

          const timer = setInterval(() => {
            count += step
            if (count >= target) {
              count = target
              clearInterval(timer)
            }
            el.textContent = isPercent ? count + '%' : count + '+'
          }, 16)

          observer.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [selector])
}
