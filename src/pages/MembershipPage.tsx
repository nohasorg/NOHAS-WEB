import { useState } from "react"

import { Link } from "react-router-dom"

import PageShell from "@/components/layout/PageShell"
import CertificateDownload from "@/components/membership/CertificateDownload"
import MembershipForm from "@/components/membership/MembershipForm"
import ArrowIcon from "@/components/ui/ArrowIcon"
import PageHero from "@/components/ui/PageHero"
import SectionLabel from "@/components/ui/SectionLabel"
import type { Member } from "@/types/member"

const benefits = [
  "Certificate of membership",
  "Access to NOHAS events and screenings",
  "Volunteer network and peer community",
  "Training in dental outreach methodology",
  "Field experience and documentation",
  "Recognition in NOHAS publications",
]

export default function MembershipPage() {
  const [view, setView] = useState<"form" | "certificate">("form")
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <PageShell>
      <PageHero
        label="Membership & benefits"
        title="Bring your skills closer to impact."
        description="Join a professional network with practical opportunities to serve, learn, and grow."
      />

      <section className="section-shell" data-reveal>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel text="Members receive" />
            <h2>Learn, serve, and grow together.</h2>
            <p className="mt-5 text-foreground/70">
              Membership connects volunteers with meaningful opportunities in community oral health.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article key={benefit} className="content-card">
                <span className="pillar-number">0{index + 1}</span>
                <h3 className="mt-5">{benefit}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-10" data-reveal>
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setView("form")}
              className={`rounded-full px-5 py-3 font-display text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                view === "form" ? "bg-primary text-white" : "border border-stone-300 bg-white text-stone-700"
              }`}
            >
              Membership Form
            </button>
            <button
              type="button"
              onClick={() => setView("certificate")}
              className={`rounded-full px-5 py-3 font-display text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                view === "certificate" ? "bg-primary text-white" : "border border-stone-300 bg-white text-stone-700"
              }`}
            >
              Download Certificate
            </button>
          </div>
        </div>
      </section>

      <section className="bg-background-alt py-16" data-reveal>
        {view === "form" ? (
          <MembershipForm
            onSuccessfulRegistration={(member) => {
              setSelectedMember(member)
              setView("certificate")
            }}
          />
        ) : (
          <CertificateDownload defaultEmail={selectedMember?.email ?? ""} />
        )}
      </section>

      <section className="section-shell" data-reveal>
        <p className="eyebrow">Questions about membership?</p>
        <Link
          to="/contact"
          className="mt-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
        >
          Contact NOHAS <ArrowIcon />
        </Link>
      </section>
    </PageShell>
  )
}
