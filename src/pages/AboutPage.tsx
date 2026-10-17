import { Link } from "react-router-dom"

import { ImpactSection } from "@/components/home/HomeSections"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About NOHAS"
        title="Our Story"
        description="The National Oral Health Awareness Society brings dental professionals, students, and communities together to make prevention and practical care more reachable across Pakistan."
      />
      <section className="section-shell" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel text="A growing public health mission" />
            <h2>Built around people, prevention, and access.</h2>
            <p className="mt-5 text-foreground/70">
              NOHAS is a non-profit platform for public health action. Its work
              connects education, screening, and community service with the
              people who need them.
            </p>
            <div className="mt-8 border-t border-stone/30 pt-5">
              <p className="eyebrow">Milestones</p>
              <ol className="role-list">
                <li>
                  <strong>2026 · NOHAS founded</strong>
                  <span>
                    Established to advance oral health awareness and practical
                    community care.
                  </span>
                </li>
                <li>
                  <strong>Community outreach</strong>
                  <span>
                    First camp and milestone dates will be added as verified
                    records are available.
                  </span>
                </li>
                <li>
                  <strong>Growing national network</strong>
                  <span>
                    Program outcomes and regional milestones will be documented
                    here.
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="about-gallery grid grid-cols-2 gap-4">
            <img
              className="about-gallery-image"
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=85"
              alt="Dental instruments prepared for community care"
            />
            <img
              className="about-gallery-image"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85"
              alt="Healthcare worker speaking with a patient"
            />
          </div>
        </div>
      </section>
      <section id="vision" className="bg-primary py-20 text-white" data-reveal>
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionLabel text="Vision & mission" light />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="border border-white/20 p-8">
              <p className="font-display text-[10px] uppercase tracking-[0.16em] text-accent">
                Our vision
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white">
                A healthier smile for every community.
              </h2>
              <p className="mt-4 text-white/75">
                A vibrant Pakistan where every citizen can protect their oral
                health.
              </p>
            </article>
            <article className="border border-white/20 p-8">
              <p className="font-display text-[10px] uppercase tracking-[0.16em] text-accent">
                Our mission
              </p>
              <h2 className="mt-4 font-serif text-4xl text-white">
                Bridge awareness and action.
              </h2>
              <p className="mt-4 text-white/75">
                Bridge innovation and awareness for healthier smiles through
                education, outreach, and accessible care.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ImpactSection />
      <section className="section-shell" data-reveal>
        <SectionLabel text="What guides us" />
        <h2>Three commitments. One healthier future.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            [
              "Education",
              "Make clear, practical oral health knowledge part of everyday life.",
            ],
            [
              "Prevention",
              "Help people recognize risks early and build lasting habits.",
            ],
            [
              "Access",
              "Bring screening and care closer to underserved communities.",
            ],
          ].map(([title, text], index) => (
            <article key={title} className="pillar-card bg-primary text-white">
              <span className="pillar-number">0{index + 1}</span>
              <h3 className="mt-12 text-white">{title}</h3>
              <p className="mt-3 text-white/75">{text}</p>
            </article>
          ))}
        </div>
        <Link to="/team" className="button-primary mt-8">
          Meet the team <ArrowIcon />
        </Link>
      </section>
    </PageShell>
  )
}
