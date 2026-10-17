import { useState } from "react"

import { Link } from "react-router-dom"

import { articles } from "@/data/journal"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

export default function JournalPage() {
  const [page, setPage] = useState(1)

  const pageSize = 6

  const pageCount = Math.ceil(articles.length / pageSize)

  const visibleArticles = articles.slice((page - 1) * pageSize, page * pageSize)

  return (
    <PageShell>
      <PageHero
        label="Journal & event articles"
        title="Field notes worth sharing."
        description="Reports from the field, clinical insights, student perspectives, and practical resources from across the country."
      />
      <section className="section-shell" data-reveal>
        <SectionLabel text="Latest stories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <article key={article.id} className="content-card">
              <span className="tag">{article.tag}</span>
              <h2 className="mt-7 font-serif text-3xl leading-tight">
                {article.title}
              </h2>
              <p className="mt-4 text-sm text-foreground/70">
                {article.excerpt}
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-stone/30 pt-4">
                <span className="font-display text-[10px] uppercase tracking-[0.12em] text-stone">
                  {article.date} · {article.readTime}
                </span>
                <button
                  type="button"
                  aria-label={`Read ${article.title}`}
                  className="text-primary"
                >
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
        {pageCount > 1 && (
          <nav
            aria-label="Journal pages"
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button
              type="button"
              className="filter-button"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span className="font-display text-xs uppercase tracking-[0.1em]">
              Page {page} of {pageCount}
            </span>
            <button
              type="button"
              className="filter-button"
              disabled={page === pageCount}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </nav>
        )}
      </section>
      <section className="bg-background-alt py-20" data-reveal>
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <SectionLabel text="Contribute to the journal" />
            <h2>Have a field note or insight to share?</h2>
            <p className="mt-4 max-w-2xl text-foreground/70">
              We welcome submissions from dental professionals and students on
              community practice, clinical learning, and oral health awareness.
            </p>
            <p className="mt-5 text-sm">
              Editorial contact:{" "}
              <a
                className="text-primary"
                href="mailto:editorial@nohasportal.org"
              >
                editorial@nohasportal.org
              </a>
            </p>
          </div>
          <a
            href="mailto:editorial@nohasportal.org?subject=NOHAS%20Journal%20Submission"
            className="button-primary"
          >
            Submit an article <ArrowIcon />
          </a>
        </div>
      </section>
      <section className="section-shell" data-reveal>
        <p className="eyebrow">Editorial desk</p>
        <h2 className="mt-2">Stories grounded in service.</h2>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
        >
          Contact the editorial team <ArrowIcon />
        </Link>
      </section>
    </PageShell>
  )
}
