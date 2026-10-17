import PageShell from "@/components/layout/PageShell"

import { TeamCards } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

import { teamMembers } from "@/data/team"

export default function ExecutiveTeamPage() {
  const executiveMembers = teamMembers.filter(
    (member) => member.department === "executive",
  )

  return (
    <PageShell>
      <PageHero
        label="Our team"
        breadcrumb="Our Team"
        parentHref="/team"
        title="Executive Team"
        description="The executive committee guides the society’s strategy, governance, coordination, and partnerships."
      />
      <section className="section-shell" data-reveal>
        <p className="max-w-2xl text-foreground/70">
          Individual biographies, responsibilities, and contact details will be
          added as the team approves their public profiles.
        </p>
        <TeamCards members={executiveMembers} />
      </section>
    </PageShell>
  )
}
