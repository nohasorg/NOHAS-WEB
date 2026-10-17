import PageShell from "@/components/layout/PageShell"

import { ActivityDetail } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

export default function CommunityOutreachPage() {
  return (
    <PageShell>
      <PageHero
        label="Activities"
        breadcrumb="Activities"
        parentHref="/activities"
        title="Community Outreach"
        description="Community-based screening, education, and referral support led by local volunteers."
      />
      <ActivityDetail category="outreach" />
    </PageShell>
  )
}
