import { useState } from "react"

import { Link } from "react-router-dom"

import { submitApiForm } from "@/lib/api"

import { useHeroTimeline, useMagneticButton } from "@/hooks"

import { articles } from "@/data/journal"

import { events } from "@/data/events"

import { partners } from "@/data/partners"

import { teamMembers } from "@/data/team"

import ArrowIcon from "@/components/ui/ArrowIcon"

import SectionLabel from "@/components/ui/SectionLabel"

import StatCounter from "@/components/ui/StatCounter"

export function HeroSection() {
  const heroRef = useHeroTimeline()

  const magneticRef = useMagneticButton<HTMLAnchorElement>()

  const scrollToStory = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-primary pt-[76px] text-white"
    >
      <img
        className="hero-watermark"
        src="/assets/nohas-logo-transparent.png"
        alt=""
        aria-hidden="true"
      />
      <div
        data-motion="hero"
        className="mx-auto grid min-h-[680px] max-w-[1240px] items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28"
      >
        <div>
          <SectionLabel text="For the people, by the people" light />
          <h1
            data-hero
            className="max-w-3xl font-serif text-6xl leading-[0.95] text-white md:text-8xl"
          >
            A healthier smile for every community.
          </h1>
          <p
            data-hero
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
          >
            NOHAS connects dental professionals, volunteers, and communities
            across Pakistan through education, outreach, and practical care.
          </p>
          <div data-hero className="mt-9 flex flex-wrap gap-3">
            <a
              href="#story"
              ref={magneticRef}
              onClick={scrollToStory}
              className="button-primary bg-white text-primary hover:bg-[#edf3ed]"
            >
              Learn More <ArrowIcon />
            </a>
            <Link to="/membership" className="button-secondary border-white text-white hover:bg-white hover:text-primary">
              Get Involved
            </Link>
          </div>
          <div
            data-hero
            className="mt-12 flex items-center gap-4 font-display text-xs uppercase tracking-[0.12em] text-white/70"
          >
            <span className="h-px w-10 bg-white/60" />
            National Oral Health Awareness Society
          </div>
        </div>
        <div data-hero className="relative">
          <div className="hero-image border-accent/60 bg-accent/50">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85"
              alt="Dental professional caring for a patient"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-[#f5f2e8] p-5 text-primary shadow-xl md:-left-8">
            <p className="font-serif text-4xl">2026</p>
            <p className="font-display text-[10px] uppercase tracking-[0.16em] text-primary/75">
              Founded for healthier Pakistan
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="h-12 w-full bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.18),transparent_60%)]" />
    </section>
  )
}

export function ImpactSection() {
  return (
    <section className="border-y border-stone/30 bg-background-alt" data-reveal>
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 md:grid-cols-4">
        <StatCounter value={45200} suffix="+" label="Treated patients" />
        <StatCounter value={310} suffix="+" label="Camps done" />
        <StatCounter value={24} label="Provinces reached" />
        <StatCounter value={85} suffix="+" label="Locations covered" />
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section data-reveal className="section-shell">
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel text="The NOHAS promise" />
          <h2>Clinical care with a community pulse.</h2>
          <p className="mt-6 text-lg text-foreground/75">
            The National Oral Health Awareness Society is a non-profit platform
            for public health action. We make prevention understandable, bring
            screening closer to underserved communities, and give the next
            generation of dental professionals a way to serve.
          </p>
          <div
            className="mt-8 grid gap-5 border-t border-stone/40 pt-6 sm:grid-cols-2"
            id="vision"
          >
            <div>
              <p className="font-display text-sm font-semibold text-primary">
                Vision
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                A vibrant Pakistan where every citizen can protect their oral
                health.
              </p>
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-primary">
                Mission
              </p>
              <p className="mt-2 text-sm text-foreground/70">
                Bridge innovation and awareness for healthier smiles.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
          >
            Our story <ArrowIcon />
          </Link>
        </div>
        <div className="about-gallery relative grid grid-cols-[1.1fr_0.9fr] gap-4">
          <img
            className="about-gallery-image"
            src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=85"
            alt="Dental tools ready for a community screening"
          />
          <img
            className="about-gallery-image"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85"
            alt="Healthcare worker with a young patient"
          />
          <span className="absolute bottom-5 left-5 bg-background px-4 py-3 font-display text-xs uppercase tracking-[0.1em] text-primary">
            Education · prevention · access
          </span>
        </div>
      </div>
    </section>
  )
}

export function AwarenessSection() {
  const items = [
    [
      "Oral health education",
      "School programs and practical awareness sessions that turn knowledge into daily care.",
    ],

    [
      "Outreach campaigns",
      "Field camps, screening drives, and mobile support for high-need communities.",
    ],

    [
      "Sustainable practice",
      "Green dentistry training and ethical dental exchange for a healthier future.",
    ],
  ]

  return (
    <section data-reveal className="bg-primary py-24 text-white">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <SectionLabel text="Scope & core pillars" light />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="text-white">Small habits. Stronger communities.</h2>
          <div>
            <p className="max-w-xl text-white/75">
              From school outreach to sustainable practice, every program is
              designed to make oral health part of everyday life.
            </p>
            <Link
              to="/programs"
              className="mt-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-accent"
            >
              View all programs <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="stagger-children mt-12 grid gap-4 md:grid-cols-3">
          {items.map(([title, text], index) => (
            <article key={title} className="pillar-card" data-reveal>
              <span className="pillar-number">0{index + 1}</span>
              <h3 className="mt-16 text-white">{title}</h3>
              <p className="mt-3 text-white/70">{text}</p>
              <Link
                to="/programs"
                className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-accent"
              >
                Explore <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LeadershipSection() {
  const leaders = teamMembers.filter(
    (member) => member.department === "executive",
  )

  return (
    <section data-reveal className="section-shell bg-background-alt">
      <SectionLabel text="People behind the work" />
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <h2>Leadership with hands in the field.</h2>
        <p className="max-w-md text-foreground/70">
          A structure built for good governance, responsive coordination, and
          meaningful volunteer support.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {leaders.map((member) => (
          <article key={member.id} className="outlined-panel">
            <p className="eyebrow">{member.role}</p>
            <h3 className="mt-3 font-serif text-3xl">{member.name}</h3>
            <p className="mt-3 text-sm text-foreground/70">
              {member.description}
            </p>
          </article>
        ))}
      </div>
      <Link
        to="/team"
        className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
      >
        Meet the full team <ArrowIcon />
      </Link>
    </section>
  )
}

export function JournalSection() {
  return (
    <section data-reveal className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel text="Journal & event articles" />
          <h2>Field notes worth sharing.</h2>
          <p className="mt-5 text-foreground/70">
            An interactive publication hub for event reports, clinical insights,
            and student-led research from across the country.
          </p>
          <a
            href="mailto:editorial@nohasportal.org"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary"
          >
            Submit an article <ArrowIcon />
          </a>
        </div>
        <div className="stagger-children grid gap-4 sm:grid-cols-2">
          {articles.map((item) => (
            <article key={item.id} className="content-card" data-reveal>
              <span className="tag">{item.tag}</span>
              <h3 className="mt-7">{item.title}</h3>
              <p className="mt-3 text-sm text-foreground/70">{item.excerpt}</p>
              <span className="mt-6 block font-display text-[10px] uppercase tracking-[0.12em] text-stone">
                {item.date} · {item.readTime}
              </span>
            </article>
          ))}
        </div>
      </div>
      <Link
        to="/journal"
        className="mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
      >
        Read all articles <ArrowIcon />
      </Link>
    </section>
  )
}

export function RaceMapSection() {
  const steps = [
    ["Location sourcing", "Find high-need communities and rural schools."],

    [
      "Sample collection & assessment",
      "Listen to local needs through field surveys.",
    ],

    [
      "Volunteer recruitment",
      "Onboard vetted applicants through structured forms.",
    ],

    [
      "Fundraising & allocation",
      "Allocate support transparently for logistics and supplies.",
    ],

    [
      "Execution & impact reporting",
      "Deploy care, record outcomes, and report back.",
    ],
  ]

  return (
    <section data-reveal className="bg-primary py-12 text-white">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <SectionLabel text="How do we work?" light />
            <h2 className="text-white">The route from need to impact.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            Follow the NOHAS field mission from the first signal to the finish
            line.
          </p>
        </div>
        <div className="race-map" aria-label="NOHAS operational race map">
          <div className="race-map-grid" />
          <div className="race-map-glow" />
          <svg
            className="race-route race-route-desktop"
            viewBox="0 0 1000 360"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M55 270 C125 65 240 55 320 205 S490 335 570 135 S760 60 945 160" />
            <path
              d="M55 270 C125 65 240 55 320 205 S490 335 570 135 S760 60 945 160"
              className="race-route-dash"
            />
          </svg>
          <svg
            className="race-route race-route-mobile"
            viewBox="0 0 360 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M55 45 C310 70 315 150 90 190 S45 310 280 350 S320 465 90 535" />
            <path
              d="M55 45 C310 70 315 150 90 190 S45 310 280 350 S320 465 90 535"
              className="race-route-dash"
            />
          </svg>
          <ol>
            {steps.map(([title, text], index) => (
              <li
                key={title}
                className={`race-checkpoint race-checkpoint-${index + 1}`}
              >
                <span className="race-checkpoint-number">0{index + 1}</span>
                <div>
                  <h3 className="text-white">{title}</h3>
                  <p className="text-white/65">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function MembershipCTA() {
  return (
    <section data-reveal className="bg-background-alt py-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <SectionLabel text="Membership & benefits" />
          <h2>Bring your skills closer to impact.</h2>
          <p className="mt-5 max-w-xl text-lg text-foreground/70">
            Join a professional network with practical opportunities to serve
            and grow.
          </p>
          <Link to="/membership" className="button-primary mt-7">
            Explore membership <ArrowIcon />
          </Link>
        </div>
        <div className="benefit-box">
          <p className="eyebrow">Members receive</p>
          {[
            "Priority deployment in national camps",
            "Participation certificates and leadership badges",
            "Continuing education resources",
            "Mentorship with experienced dental surgeons",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex gap-3 border-b border-primary/15 py-3 text-sm"
            >
              <span className="text-primary">✦</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PartnersSection() {
  return (
    <section data-reveal className="section-shell">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel text="Sponsor us" />
          <h2>Good work grows in partnership.</h2>
        </div>
        <p className="max-w-md text-foreground/70">
          NOHAS is proud to work with 34+ major brands and corporate sponsors
          who provide clinical supplies and financial backing.
        </p>
      </div>
      <div className="partner-row mt-12">
        {partners.map((partner) => (
          <span key={partner.name}>{partner.name}</span>
        ))}
      </div>
      <Link
        to="/sponsors"
        className="mt-7 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
      >
        Partner with us <ArrowIcon />
      </Link>
    </section>
  )
}

export function SessionsSection() {
  return (
    <section data-reveal className="section-shell">
      <SectionLabel text="Online awareness sessions" />
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2>Learn from specialists.</h2>
        <Link to="/events" className="button-secondary">
          View all sessions <ArrowIcon />
        </Link>
      </div>
      <div className="stagger-children mt-12 grid gap-5 md:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="event-card" data-reveal>
            <div className="date-badge">
              <strong>{event.date.split(" ")[0]}</strong>
              <span>{event.date.split(" ")[1]}</span>
            </div>
            <p className="eyebrow">{event.type}</p>
            <h3>{event.title}</h3>
            <p className="mt-3 text-sm text-foreground/65">
              {event.description}
            </p>
            <Link
              to="/events"
              className="mt-7 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
            >
              Details <ArrowIcon />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState("")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    setError("")

    const form = new FormData(event.currentTarget)

    try {
      await submitApiForm(
        "contact",
        Object.fromEntries(form.entries()) as Record<string, string>,
      )

      setSubmitted(true)

      event.currentTarget.reset()
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Please try again.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section data-reveal className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel text="Start a conversation" />
          <h2>Let’s make care more reachable.</h2>
          <div className="mt-10 space-y-6">
            <div>
              <p className="eyebrow">Email</p>
              <a
                className="text-lg text-primary"
                href="mailto:info.nohas@gmail.com"
              >
                info.nohas@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow">Web</p>
              <p className="text-lg">nohasorg.pk</p>
            </div>
            <div>
              <p className="eyebrow">Office</p>
              <p className="text-lg">Lahore, Punjab, Pakistan</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
          >
            Contact page <ArrowIcon />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label>
            Name
            <input required name="name" />
          </label>
          <label>
            Email
            <input required type="email" name="email" />
          </label>
          <label className="sm:col-span-2">
            Subject
            <input required name="subject" />
          </label>
          <label className="sm:col-span-2">
            Message
            <textarea required name="message" rows={5} />
          </label>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button className="button-primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <ArrowIcon />
            </button>
            {submitted && (
              <p role="status" className="text-sm text-primary">
                Message received. Thank you.
              </p>
            )}
            {error && (
              <p role="alert" className="text-sm font-semibold text-red-700">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
