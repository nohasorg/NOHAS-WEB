import { Link } from "react-router-dom"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

export default function ConferencePage() {
  return (
    <PageShell>
      <PageHero
        label="Annual conference · 2026"
        breadcrumb="Events"
        parentHref="/events"
        title="Annual Oral Health Summit"
        description="A national meeting point for dental professionals, students, partners, and community health advocates."
        actions={
          <Link
            to="/contact"
            className="button-secondary border-accent text-white hover:border-white"
          >
            Ask about the summit <ArrowIcon />
          </Link>
        }
      />
      <section className="section-shell" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionLabel text="About the conference" />
            <h2>One shared focus: healthier communities.</h2>
            <p className="mt-5 text-lg text-foreground/70">
              The annual summit will bring together people advancing oral health
              education, prevention, and access. Program details will be
              published when the date, venue, and speakers are confirmed.
            </p>
          </div>
          <div className="outlined-panel">
            <p className="eyebrow">Conference information</p>
            <dl className="role-list">
              <div>
                <dt className="font-display text-sm">Year</dt>
                <dd className="text-sm text-foreground/70">2026</dd>
              </div>
              <div>
                <dt className="font-display text-sm">Date</dt>
                <dd className="text-sm text-foreground/70">To be announced</dd>
              </div>
              <div>
                <dt className="font-display text-sm">Venue</dt>
                <dd className="text-sm text-foreground/70">To be announced</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-background-alt py-20" data-reveal>
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionLabel text="Speakers" />
          <h2>Voices from across oral health.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="outlined-panel">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent font-serif text-3xl text-primary">
                NO
              </div>
              <p className="eyebrow mt-5">Speaker announcement</p>
              <h3 className="mt-2 font-serif text-3xl">
                Details to be announced
              </h3>
            </article>
          </div>
        </div>
      </section>
      <section className="section-shell" data-reveal>
        <SectionLabel text="Program" />
        <h2>Summit schedule.</h2>
        <ol className="mt-8 border-l border-stone/50 pl-6">
          {[
            ["Opening", "Welcome and community oral health priorities"],
            ["Expert sessions", "Clinical insight, prevention, and access"],
            [
              "Community practice",
              "Learning from outreach teams and volunteers",
            ],
            ["Closing", "Partnerships and next steps"],
          ].map(([time, title]) => (
            <li key={time} className="relative border-b border-stone/30 py-5">
              <span className="absolute -left-[30px] top-7 h-2 w-2 rounded-full bg-primary" />
              <p className="eyebrow">{time}</p>
              <h3 className="mt-1">{title}</h3>
              <p className="mt-2 text-sm text-foreground/65">
                Session timing will be confirmed with the conference program.
              </p>
            </li>
          ))}
        </ol>
        <Link to="/contact" className="button-primary mt-8">
          Registration interest <ArrowIcon />
        </Link>
      </section>
    </PageShell>
  )
}
