import type { ReactNode } from "react"

import { Link } from "react-router-dom"

interface PageHeroProps {
  label: string

  title: string

  description: string

  breadcrumb?: string

  parentHref?: string

  actions?: ReactNode
}

export default function PageHero({
  label,

  title,

  description,

  breadcrumb,

  parentHref,

  actions,
}: PageHeroProps) {
  return (
    <section className="bg-primary py-20 text-white md:py-24" data-reveal>
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 font-display text-[10px] uppercase tracking-[0.16em] text-white/65"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {" / "}
            {parentHref ? (
              <Link to={parentHref} className="hover:text-white">
                {breadcrumb}
              </Link>
            ) : (
              breadcrumb
            )}
            {" / "}
            <span className="text-accent">{title}</span>
          </nav>
        )}
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
          {label}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-6xl leading-[0.95] text-white md:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {description}
        </p>
        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  )
}
