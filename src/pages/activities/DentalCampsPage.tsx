import PageShell from "@/components/layout/PageShell"

import { ActivityDetail } from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

export default function DentalCampsPage() {
  return (
    <PageShell>
      <PageHero
        label="Activities"
        breadcrumb="Activities"
        parentHref="/activities"
        title="Dental Camps"
        description="Screening, practical dental support, and referrals brought closer to underserved communities."
      />
      <ActivityDetail category="camps" />
    </PageShell>
  )
}
