import type { Event } from "@/data/events"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.status === "upcoming"

  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
            isUpcoming ? "bg-green-100 text-green-800" : "bg-stone-200 text-stone-700"
          }`}
        >
          {event.status}
        </span>
        {event.tags && event.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-stone-600">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <h3 className="font-serif text-2xl leading-tight text-jet">{event.title}</h3>
      <div className="space-y-1 text-sm text-stone-700">
        <p className="font-semibold text-amber-600">{event.date} · {event.time}</p>
        <p className="text-stone-500">{event.location}</p>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-stone-600">{event.description}</p>

      {event.registrationUrl ? (
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:underline"
        >
          Registration link →
        </a>
      ) : null}
    </article>
  )
}
