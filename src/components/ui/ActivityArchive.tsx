import { useState } from "react"

import { activities } from "@/data/activities"

import { ActivityCards } from "@/components/ui/ContentBlocks"

import FilterButton from "@/components/ui/FilterButton"

import SectionLabel from "@/components/ui/SectionLabel"

const categories: { label: string; value: string }[] = [
  { label: "All", value: "All" },

  { label: "Outreach", value: "outreach" },

  { label: "Dental Camps", value: "camps" },

  { label: "Workshops", value: "workshops" },

  { label: "Seminars", value: "seminars" },
]

export default function ActivityArchive() {
  const [province, setProvince] = useState("All")

  const [year, setYear] = useState("All")

  const [category, setCategory] = useState("All")

  const provinces = ["All", "Punjab", "Sindh", "KPK", "Balochistan", "Federal"]

  const years = ["All", ...new Set(activities.map((activity) => activity.year))]

  const visible = activities.filter(
    (activity) =>
      (province === "All" || activity.province === province) &&
      (year === "All" || activity.year === year) &&
      (category === "All" || activity.category === category),
  )

  return (
    <section className="section-shell" data-reveal>
      <SectionLabel text="Past events" />
      <h2>Care, captured in the field.</h2>
      <p className="mt-4 max-w-xl text-foreground/70">
        Browse past activities by year, province, and activity type.
      </p>
      <div className="mt-7 grid gap-5 border-t border-stone/30 pt-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display text-[10px] uppercase tracking-[0.12em] text-stone">
            Year
          </span>
          {years.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={year === item}
              onClick={() => setYear(item)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display text-[10px] uppercase tracking-[0.12em] text-stone">
            Province
          </span>
          {provinces.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={province === item}
              onClick={() => setProvince(item)}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 font-display text-[10px] uppercase tracking-[0.12em] text-stone">
            Type
          </span>
          {categories.map((item) => (
            <FilterButton
              key={item.value}
              label={item.label}
              active={category === item.value}
              onClick={() => setCategory(item.value)}
            />
          ))}
        </div>
      </div>
      {visible.length ? (
        <ActivityCards items={visible} />
      ) : (
        <p className="mt-8 text-foreground/70">
          No activities match these filters yet.
        </p>
      )}
    </section>
  )
}
