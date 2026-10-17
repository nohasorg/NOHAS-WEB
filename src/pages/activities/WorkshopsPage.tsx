import PageShell from "@/components/layout/PageShell"

import { ActivityDetail } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

export default function WorkshopsPage() {
  return (
    <PageShell>
      <PageHero
        label="Activities"
        breadcrumb="Activities"
        parentHref="/activities"
        title="Workshops"
        description="Practical learning experiences for students, professionals, families, and community volunteers."
      />
      <ActivityDetail category="workshops" />
    </PageShell>
  )
}
