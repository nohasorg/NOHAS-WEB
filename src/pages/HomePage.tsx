import PageShell from "@/components/layout/PageShell"

import HeroSection from "@/components/home/HeroSection"
import ImpactCounterSection from "@/components/home/ImpactCounterSection"
import StorySection from "@/components/home/StorySection"

import AwarenessSection from "@/components/home/AwarenessSection"
import ContactSection from "@/components/home/ContactSection"
import JournalSection from "@/components/home/JournalSection"
import LeadershipSection from "@/components/home/LeadershipSection"
import MembershipCTA from "@/components/home/MembershipCTA"
import PartnersSection from "@/components/home/PartnersSection"
import RaceMapSection from "@/components/home/RaceMapSection"
import SessionsSection from "@/components/home/SessionsSection"

export default function HomePage() {
  return (
    <PageShell topPadding={false}>
      <HeroSection />
      <ImpactCounterSection />
      <StorySection />
      <AwarenessSection />
      <LeadershipSection />
      <JournalSection />
      <RaceMapSection />
      <MembershipCTA />
      <PartnersSection />
      <SessionsSection />
      <ContactSection />
    </PageShell>
  )
}
