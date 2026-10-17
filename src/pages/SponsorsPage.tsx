import { Link } from "react-router-dom"

import { partners } from "@/data/partners"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

const tiers = ["Platinum", "Gold", "Silver", "Community Partner"] as const

export default function SponsorsPage() {
  return (
    <PageShell>
      <PageHero
        label="Sponsor us"
        title="Good work grows in partnership."
        description="NOHAS is proud to work with 34+ major brands and corporate sponsors who provide clinical supplies and financial backing."
      />
      <section
        className="border-b border-stone/30 bg-background-alt"
        data-reveal
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-3 px-5 lg:px-8">
          <div className="impact-stat">
            <strong>34+</strong>
            <span>Corporate sponsors</span>
          </div>
          <div className="impact-stat">
            <strong>3</strong>
            <span>Support areas</span>
          </div>
          <div className="impact-stat">
            <strong>1</strong>
            <span>Shared purpose</span>
          </div>
        </div>
      </section>
      <section className="section-shell" data-reveal>
        <SectionLabel text="Our partners" />
        <h2>Organizations supporting healthier communities.</h2>
        <div className="mt-10 space-y-10">
          {tiers.map((tier) => (
            <div key={tier}>
              <p className="eyebrow">{tier}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {partners
                  .filter((partner) => partner.tier === tier)
                  .map((partner) => (
                    <div
                      key={partner.name}
                      className={`flex min-h-28 items-center justify-center border border-stone/40 bg-background-alt p-6 font-display text-sm font-semibold tracking-[0.1em] text-primary ${
                        tier === "Platinum"
                          ? "lg:col-span-2 lg:min-h-36 lg:text-lg"
                          : ""
                      }`}
                    >
                      {partner.name}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary py-20 text-white" data-reveal>
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionLabel text="Why partner with us" light />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Reach",
                "Connect with communities and professionals across Pakistan.",
              ],
              [
                "Impact",
                "Support practical education, screening, and outreach.",
              ],
              [
                "Visibility",
                "Build meaningful recognition around public health work.",
              ],
            ].map(([title, text]) => (
              <article key={title} className="border border-white/20 p-7">
                <h2 className="font-serif text-4xl text-white">{title}</h2>
                <p className="mt-4 text-white/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell" data-reveal>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Sponsorship packages</p>
            <h2 className="mt-2">Let's build a healthier future together.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info.nohas@gmail.com?subject=NOHAS%20Sponsorship"
              className="button-primary"
            >
              Request sponsor deck <ArrowIcon />
            </a>
            <Link to="/contact" className="button-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
