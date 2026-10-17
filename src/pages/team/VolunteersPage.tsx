import PageShell from "@/components/layout/PageShell"

import { RegionalVolunteers, TeamCards } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

import { teamMembers } from "@/data/team"

export default function VolunteersPage() {
  const volunteers = teamMembers.filter(
    (member) => member.department !== "executive",
  )

  return (
    <PageShell>
      <PageHero
        label="Our team"
        breadcrumb="Our Team"
        parentHref="/team"
        title="Volunteers"
        description="Regional volunteers and operational leads carry NOHAS programs into local communities."
      />
      <section className="section-shell" data-reveal>
        <p className="max-w-2xl text-foreground/70">
          Volunteer names and affiliations will be added with permission.
          Regional leads help build local relationships and coordinate community
          support.
        </p>
        <TeamCards members={volunteers} />
      </section>
      <RegionalVolunteers />
    </PageShell>
  )
}
