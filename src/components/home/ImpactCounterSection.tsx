import { useCountUp } from "@/hooks/useCountUp"

const metrics = [
  { value: 5000, suffix: "+", label: "People Reached" },
  { value: 120, suffix: "+", label: "Volunteer Hours" },
  { value: 40, suffix: "+", label: "Community Camps" },
  { value: 8, suffix: "", label: "Cities Covered" },
]

function MetricCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, ref] = useCountUp(value, { suffix })

  return (
    <div className="impact-stat rounded-2xl border border-stone-200 bg-white shadow-sm" ref={ref as any}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function ImpactCounterSection() {
  return (
    <section className="border-y border-stone-200 bg-background-alt py-24" data-reveal>
      <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Our impact so far
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl">Changing habits, one community at a time.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
