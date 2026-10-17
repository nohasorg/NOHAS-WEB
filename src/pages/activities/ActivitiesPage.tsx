import PageShell from "@/components/layout/PageShell"

import {
  ActivityCategoryGrid,
  ActivityFeed,
} from "@/components/ui/ContentBlocks"

import PageHero from "@/components/ui/PageHero"

export default function ActivitiesPage() {
  return (
    <PageShell>
      <PageHero
        label="Across Pakistan"
        title="National Activities"
        description="NOHAS has successfully conducted numerous events organized by our team members and regional volunteers from across Pakistan."
      />
      <ActivityCategoryGrid />
      <ActivityFeed limit={6} title="Recent activity" />
    </PageShell>
  )
}
