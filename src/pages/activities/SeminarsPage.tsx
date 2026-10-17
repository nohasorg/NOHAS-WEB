import PageShell from "@/components/layout/PageShell"

import { ActivityDetail } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

export default function SeminarsPage() {
  return (
    <PageShell>
      <PageHero
        label="Activities"
        breadcrumb="Activities"
        parentHref="/activities"
        title="Seminars & Panels"
        description="Expert discussions and public sessions on emerging oral health priorities and community dentistry."
      />
      <ActivityDetail category="seminars" />
    </PageShell>
  )
}
