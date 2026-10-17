import PageShell from "@/components/layout/PageShell"
import CommentBar from "@/components/events/CommentBar"
import EventCard from "@/components/events/EventCard"
import SectionLabel from "@/components/ui/SectionLabel"
import { pastEvents, upcomingEvents } from "@/data/events"

export default function EventsPage() {
  return (
    <PageShell>
      <section className="bg-primary px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            NOHAS events
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-none md:text-7xl">
            Events & Programs
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Workshops, outreach camps, seminars, and community programs by NOHAS Pakistan.
          </p>
        </div>
      </section>

      <section className="section-shell" data-reveal>
        <SectionLabel text="Upcoming events" />
        <h2>Meet us at an upcoming session.</h2>

        {upcomingEvents.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border-2 border-dashed border-stone-300 bg-white p-10 text-center text-stone-500">
            <p className="text-lg font-semibold">No upcoming events right now</p>
            <p className="mt-2 text-sm">
              We&apos;re planning our next programme. Check back soon or follow us on social media for announcements.
            </p>
          </div>
        )}
      </section>

      <section className="bg-stone-50 py-20" data-reveal>
        <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
          <SectionLabel text="Past events" />
          <h2>What we have already delivered.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pastEvents.map((event) => (
              <article key={event.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                <img src={event.image} alt={event.title} className="h-60 w-full object-cover" />
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">{event.date}</p>
                  <h3 className="mt-2 font-serif text-2xl text-jet">{event.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CommentBar />
    </PageShell>
  )
}
