import { useEffect, useRef, type RefObject } from "react"

interface UseRevealOptions {
  threshold?: number
  once?: boolean
  visibleClass?: string
}

export function useReveal<T extends Element>(
  options: UseRevealOptions = {},
): RefObject<T | null> {
  const { threshold = 0.15, once = true, visibleClass = "is-visible" } = options
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add(visibleClass)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove(visibleClass)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, once, visibleClass])

  return ref
}
