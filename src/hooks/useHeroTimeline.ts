import { useEffect, useRef, type RefObject } from "react"
import { gsap } from "gsap"

export function useHeroTimeline(): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const targets = container.querySelectorAll("[data-hero]")
    const context = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 28,
        duration: 0.85,
        ease: "power3.out",
        stagger: { each: 0.1, ease: "power2.out" },
        clearProps: "all",
      })
    }, container)

    return () => context.revert()
  }, [])

  return ref
}
