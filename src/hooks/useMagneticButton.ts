import { useEffect, useRef, type RefObject } from "react"
import { gsap } from "gsap"

export function useMagneticButton<T extends HTMLElement>(
  strength = 0.35,
): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const onMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      gsap.to(element, {
        x: (event.clientX - (rect.left + rect.width / 2)) * strength,
        y: (event.clientY - (rect.top + rect.height / 2)) * strength,
        duration: 0.28,
        ease: "power2.out",
      })
    }
    const onMouseLeave = () => gsap.to(element, { x: 0, y: 0, duration: 0.42, ease: "elastic.out(1, 0.4)" })

    element.addEventListener("mousemove", onMouseMove)
    element.addEventListener("mouseleave", onMouseLeave)
    return () => {
      element.removeEventListener("mousemove", onMouseMove)
      element.removeEventListener("mouseleave", onMouseLeave)
      gsap.killTweensOf(element)
    }
  }, [strength])

  return ref
}
