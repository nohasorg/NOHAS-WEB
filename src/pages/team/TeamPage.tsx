import { Link } from "react-router-dom"

import { teamMembers } from "@/data/team"

import PageShell from "@/components/layout/PageShell"

import {
  RegionalVolunteers,
  TeamCards,
  TeamDirectory,
} from "@/components/ui/ContentBlocks"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

export default function TeamPage() {
  const founders = teamMembers.filter((member) =>
    member.role.toLowerCase().includes("founder"),
  )

  return (
    <PageShell>
      <PageHero
        label="People behind the work"
        title="Leadership with hands in the field."
        description="Meet the people coordinating the NOHAS mission, supporting volunteers, and building trusted community relationships."
      />
      <TeamDirectory
        members={teamMembers.filter(
          (member) => member.department === "executive",
        )}
        title="Executive leadership"
      />
      <section
        id="founders"
        className="section-shell bg-background-alt"
        data-reveal
      >
        <SectionLabel text="Founding team" />
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2>Meet the founders.</h2>
          <p className="max-w-lg text-foreground/70">
            Founder names, introductions, and portraits can be added to each
            profile as verified materials are provided.
          </p>
        </div>
        <TeamCards members={founders} />
      </section>
      <section className="section-shell pt-0" data-reveal>
        <SectionLabel text="Operational leads" />
        <h2>People making each event possible.</h2>
        <TeamCards
          members={teamMembers.filter(
            (member) => member.department === "operational",
          )}
        />
        <Link
          to="/team/volunteers"
          className="mt-7 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-primary"
        >
          Meet our volunteers <ArrowIcon />
        </Link>
      </section>
      <RegionalVolunteers />
      <section className="bg-background-alt py-16" data-reveal>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-5 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="eyebrow">Join the team</p>
            <h2 className="mt-2 font-serif text-4xl">
              Make your next contribution count.
            </h2>
          </div>
          <Link to="/membership" className="button-primary">
            Join NOHAS <ArrowIcon />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
