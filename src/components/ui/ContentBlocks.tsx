import { useState } from "react"

import { Link } from "react-router-dom"

import {
  activities,
  type Activity,
  type ActivityCategory,
  type Province,
} from "@/data/activities"

import { events } from "@/data/events"

import { teamMembers, type TeamMember, type TeamYear } from "@/data/team"

import ArrowIcon from "@/components/ui/ArrowIcon"

import FilterButton from "@/components/ui/FilterButton"

import SectionLabel from "@/components/ui/SectionLabel"

import StatCounter from "@/components/ui/StatCounter"

const categoryLabels: Record<ActivityCategory, string> = {
  outreach: "Community Outreach",

  camps: "Dental Camps",

  workshops: "Workshops",

  seminars: "Seminars & Panels",
}

const categoryDescriptions: Record<ActivityCategory, string> = {
  outreach:
    "Community-based screening, education, and referral support led by local volunteers.",

  camps:
    "Practical dental services and screening brought closer to underserved communities.",

  workshops:
    "Hands-on learning that equips students, clinicians, and families with practical skills.",

  seminars:
    "Expert discussions and public sessions on emerging oral health priorities.",
}

export function ActivityCategoryGrid() {
  const categories: ActivityCategory[] = [
    "outreach",
    "camps",
    "workshops",
    "seminars",
  ]

  return (
    <section className="section-shell" data-reveal>
      <SectionLabel text="Explore activities" />
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category, index) => (
          <Link
            key={category}
            to={`/activities/${category}`}
            className="group flex min-h-56 flex-col justify-between border border-stone/40 bg-background-alt p-7 transition-[background-color,color,transform] duration-[var(--dur-normal)] hover:-translate-y-0.5 hover:bg-primary hover:text-white"
          >
            <div className="flex items-center justify-between">
              <span className="pillar-number">0{index + 1}</span>
              <ArrowIcon />
            </div>
            <div>
              <h2 className="font-serif text-3xl leading-tight group-hover:text-white">
                {categoryLabels[category]}
              </h2>
              <p className="mt-3 max-w-lg text-sm text-foreground/70 group-hover:text-white/75">
                {categoryDescriptions[category]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

interface ActivityFeedProps {
  category?: ActivityCategory

  limit?: number

  title?: string
}

export function ActivityFeed({
  category,
  limit,
  title = "Recent activities",
}: ActivityFeedProps) {
  const [province, setProvince] = useState("All")

  const provinces = ["All", "Punjab", "Sindh", "KPK", "Balochistan"]

  const matching = activities.filter((activity) => {
    const matchesCategory = !category || activity.category === category

    const matchesProvince = province === "All" || activity.province === province

    return matchesCategory && matchesProvince
  })

  const visible = limit ? matching.slice(0, limit) : matching

  return (
    <section className="section-shell" data-reveal>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel text="From the field" />
          <h2>{title}</h2>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filter by province">
          {provinces.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={province === item}
              onClick={() => setProvince(item)}
            />
          ))}
        </div>
      </div>
      {visible.length ? (
        <ActivityCards items={visible} />
      ) : (
        <p className="mt-8 border-t border-stone/30 pt-6 text-foreground/70">
          No activities are listed for this province yet.
        </p>
      )}
    </section>
  )
}

export function ActivityCards({ items }: { items: Activity[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((activity) => (
        <article key={activity.id} className="gallery-card" data-reveal>
          <img
            src={
              activity.image ??
              "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
            }
            alt={activity.title}
            loading="lazy"
          />
          <div>
            <span className="eyebrow">
              {activity.place} · {activity.province} · {activity.year}
            </span>
            <h3>{activity.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">
              {activity.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export function ActivityDetail({ category }: { category: ActivityCategory }) {
  const items = activities.filter((activity) => activity.category === category)

  const locations = new Set(items.map((activity) => activity.place)).size

  const participants = items.reduce(
    (sum, activity) => sum + (activity.participants ?? 0),
    0,
  )

  return (
    <>
      <section
        className="border-b border-stone/30 bg-background-alt"
        data-reveal
      >
        <div className="mx-auto grid max-w-[1240px] grid-cols-3 px-5 lg:px-8">
          <StatCounter value={items.length} label="Listed activities" />
          <StatCounter value={locations} label="Locations represented" />
          {participants > 0 ? (
            <StatCounter
              value={participants}
              suffix="+"
              label="Reported participants"
            />
          ) : (
            <div className="impact-stat">
              <strong>Pending</strong>
              <span>Participant reports</span>
            </div>
          )}
        </div>
      </section>
      <ActivityFeed
        category={category}
        title={`${categoryLabels[category]} in the field`}
      />
      <section className="section-shell pt-0" data-reveal>
        <div className="bg-primary px-7 py-10 text-white md:px-12">
          <h2 className="text-white">Help bring the next event to life.</h2>
          <p className="mt-4 max-w-xl text-white/75">
            Join the NOHAS volunteer network and take part in community oral
            health work.
          </p>
          <Link
            to="/membership"
            className="button-secondary mt-7 border-accent text-white hover:border-white"
          >
            Volunteer for the next event <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}

const yearFilters: { label: string; value: TeamYear | "all" }[] = [
  { label: "Current", value: "current" },

  { label: "2024-25", value: "2024-25" },

  { label: "2023-24", value: "2023-24" },

  { label: "2022-23", value: "2022-23" },

  { label: "Founding Team", value: "founding" },
]

export function TeamCards({ members }: { members: TeamMember[] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article key={member.id} className="outlined-panel" data-reveal>
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="mb-5 aspect-square w-28 rounded-full object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="mb-5 flex aspect-square w-28 items-center justify-center rounded-full bg-accent font-serif text-3xl text-primary"
            >
              {member.name === "TBD"
                ? "NO"
                : member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
            </div>
          )}
          <p className="font-display text-[10px] uppercase tracking-[0.14em] text-primary">
            {member.role}
          </p>
          <h3 className="mt-2 font-serif text-3xl">{member.name}</h3>
          <p className="mt-3 text-sm text-foreground/70">
            {member.description}
          </p>
          {member.college && (
            <p className="mt-4 border-t border-stone/30 pt-4 text-xs text-foreground/60">
              {member.college}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

interface TeamDirectoryProps {
  members?: TeamMember[]

  title?: string
}

export function TeamDirectory({
  members = teamMembers,
  title = "Executive leadership",
}: TeamDirectoryProps) {
  const [year, setYear] = useState<TeamYear | "all">("current")

  const filtered = members.filter(
    (member) => year === "all" || member.year === year,
  )

  return (
    <section className="section-shell" data-reveal>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel text="People behind the work" />
          <h2>{title}</h2>
        </div>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter team by year"
        >
          {yearFilters.map((item) => (
            <FilterButton
              key={item.value}
              label={item.label}
              active={year === item.value}
              onClick={() => setYear(item.value)}
            />
          ))}
        </div>
      </div>
      {filtered.length ? (
        <TeamCards members={filtered} />
      ) : (
        <p className="mt-8 border-t border-stone/30 pt-6 text-foreground/70">
          Profiles for this archive year will be added when available.
        </p>
      )}
    </section>
  )
}

export function RegionalVolunteers() {
  const provinces: Province[] = [
    "Punjab",
    "Sindh",
    "KPK",
    "Balochistan",
    "Federal",
  ]

  return (
    <section className="section-shell pt-0" data-reveal>
      <SectionLabel text="Across Pakistan" />
      <h2>Regional volunteers.</h2>
      <div className="race-map mt-8 flex items-center">
        <div className="race-map-grid" />
        <div className="race-map-glow" />
        <ul className="relative z-10 grid w-full gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5">
          {provinces.map((province, index) => (
            <li
              key={province}
              className="border border-accent/30 bg-[#214b2d]/90 p-4 text-white"
            >
              <span className="pillar-number">0{index + 1}</span>
              <h3 className="mt-4 text-white">{province}</h3>
              <p className="mt-2 text-xs text-white/70">
                Local relationships and community trust.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function EventsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article key={event.id} className="event-card" data-reveal>
          <div className="date-badge">
            <strong>{event.date.split(" ")[0]}</strong>
            <span>{event.date.split(" ")[1]}</span>
          </div>
          <p className="eyebrow">
            {event.isVirtual ? "Virtual" : event.location} · {event.type}
          </p>
          <h3 className="mt-2">{event.title}</h3>
          <p className="mt-3 text-sm text-foreground/70">{event.description}</p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
          >
            Register <ArrowIcon />
          </Link>
        </article>
      ))}
    </div>
  )
}

export function TeamLeadSummary() {
  return (
    <p className="max-w-2xl text-foreground/70">
      A structure built for good governance, responsive coordination, and
      meaningful volunteer support.
    </p>
  )
}
