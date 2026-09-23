import { useEffect, useRef, useState, type RefObject } from "react"

export function useCountUp(
  end: number,
  options: { duration?: number; suffix?: string; prefix?: string } = {},
): [string, RefObject<HTMLElement | null>] {
  const { duration = 1800, suffix = "", prefix = "" } = options
  const ref = useRef<HTMLElement | null>(null)
  const [value, setValue] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated.current) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end)
      hasAnimated.current = true
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return
      hasAnimated.current = true
      observer.disconnect()
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        setValue(Math.round((1 - Math.pow(1 - progress, 3)) * end))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration])

  return [`${prefix}${value.toLocaleString()}${suffix}`, ref]
}
