import { Link } from "react-router-dom"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

const programs = [
  {
    id: "education",
    title: "Oral Health Education",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    intro:
      "Practical, accessible oral health education for children, families, students, and communities.",
    what: "School programs and awareness sessions that turn clinical guidance into daily habits.",
    how: "NOHAS volunteers deliver demonstrations, answer questions, and share age-appropriate prevention resources.",
    reaches: "Schools, families, and community groups across Pakistan.",
    outcomes:
      "Improved understanding of oral hygiene, prevention, and when to seek professional care.",
  },

  {
    id: "outreach",
    title: "Outreach Campaigns",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
    intro:
      "Field camps, screening drives, and mobile support for high-need communities.",
    what: "Community-based screening and care that connects people with practical next steps.",
    how: "Local needs are assessed, volunteers are coordinated, and services are delivered with follow-up guidance.",
    reaches: "Rural schools and underserved communities.",
    outcomes:
      "Earlier identification, referrals, and a stronger local connection to oral health services.",
  },

  {
    id: "sustainable",
    title: "Sustainable Practice",
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85",
    intro:
      "Building a responsible and resilient future for community dentistry.",
    what: "Green dentistry training and ethical dental exchange.",
    how: "Knowledge-sharing helps teams consider sustainable materials, responsible practice, and community needs.",
    reaches: "Dental professionals, students, and partner organizations.",
    outcomes:
      "More informed practice and long-term collaboration for healthier communities.",
  },
]

export default function ProgramsPage() {
  return (
    <PageShell>
      <PageHero
        label="Our work"
        title="Our Programs"
        description="From everyday education to community outreach and sustainable practice, NOHAS programs bring oral health into reach."
      />
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className="section-shell"
          data-reveal
        >
          <div
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 ? "" : ""
            }`}
          >
            <img
              src={program.image}
              alt={program.title}
              className={`aspect-[4/3] w-full object-cover ${
                index % 2 ? "lg:order-2" : ""
              }`}
              loading="lazy"
            />
            <div className={index % 2 ? "lg:order-1" : ""}>
              <p className="eyebrow">Program 0{index + 1}</p>
              <h2 className="mt-3">{program.title}</h2>
              <p className="mt-5 text-lg text-foreground/75">{program.intro}</p>
              <dl className="mt-7 space-y-5 border-t border-stone/30 pt-6">
                {[
                  ["What it is", program.what],
                  ["How it works", program.how],
                  ["Who it reaches", program.reaches],
                  ["Key outcomes", program.outcomes],
                ].map(([label, text]) => (
                  <div key={label}>
                    <dt className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground/70">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}
      <section className="bg-background-alt py-16" data-reveal>
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-5 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow">Take part</p>
            <h2 className="mt-2 font-serif text-4xl">
              Bring your skills closer to impact.
            </h2>
          </div>
          <Link to="/membership" className="button-primary">
            Join as a volunteer <ArrowIcon />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
