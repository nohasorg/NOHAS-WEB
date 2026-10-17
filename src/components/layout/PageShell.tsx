import { useEffect, type ReactNode } from "react"

import { useLocation } from "react-router-dom"

interface PageShellProps {
  children: ReactNode

  className?: string

  topPadding?: boolean
}

export default function PageShell({
  children,
  className = "",
  topPadding = true,
}: PageShellProps) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1))
      document
        .getElementById(targetId)
        ?.scrollIntoView({ behavior: "auto", block: "start" })
    } else {
      window.scrollTo({ top: 0, behavior: "auto" })
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    )

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) =>
        element.classList.add("reveal", "is-visible"),
      )

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")

            observer.unobserve(entry.target)
          }
        })
      },

      { threshold: 0.1 },
    )

    elements.forEach((element) => {
      element.classList.add("reveal")

      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.hash, location.pathname])

  return (
    <div className={`${topPadding ? "pt-[84px]" : ""} ${className}`}>
      {children}
    </div>
  )
}
