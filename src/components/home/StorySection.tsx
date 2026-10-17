import { Link } from "react-router-dom"

import ArrowIcon from "@/components/ui/ArrowIcon"

export default function StorySection() {
  return (
    <section id="story" className="bg-white py-24" data-reveal>
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Our story
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl">Why NOHAS exists.</h2>
          <p className="mt-6 text-lg text-foreground/75">
            NOHAS began with a simple truth: oral health is too often treated as secondary,
            even when it affects confidence, nutrition, dignity, and overall wellbeing.
          </p>
          <p className="mt-4 text-lg text-foreground/75">
            We built a people-first platform to make prevention practical, awareness accessible,
            and professional support reachable across Pakistan.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary">
            Read Our Full Story <ArrowIcon />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-primary p-8 text-white shadow-[0_20px_50px_rgba(47,94,58,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,211,193,0.3),transparent_40%)]" aria-hidden="true" />
          <div className="relative space-y-6">
            <p className="font-display text-xs uppercase tracking-[0.14em] text-accent">
              Our promise
            </p>
            <blockquote className="font-serif text-4xl leading-tight text-white md:text-5xl">
              “Every community deserves a healthier mouth, a stronger future, and a trusted voice.”
            </blockquote>
            <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-white/90">
                From families to future professionals, NOHAS brings oral health knowledge into
                everyday life and turns community concern into practical action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
