import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import AboutPage from "@/pages/AboutPage"
import ConferencePage from "@/pages/events/ConferencePage"
import EventsPage from "@/pages/events/EventsPage"
import HomePage from "@/pages/HomePage"
import JournalPage from "@/pages/JournalPage"
import MembershipPage from "@/pages/MembershipPage"
import SponsorsPage from "@/pages/SponsorsPage"
import ContactPage from "@/pages/ContactPage"
import ExecutiveTeamPage from "@/pages/team/ExecutiveTeamPage"
import TeamPage from "@/pages/team/TeamPage"
import VolunteersPage from "@/pages/team/VolunteersPage"

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<Navigate to="/events" replace />} />
          <Route path="/activities" element={<Navigate to="/events" replace />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/executive" element={<ExecutiveTeamPage />} />
          <Route path="/team/volunteers" element={<VolunteersPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/conference" element={<ConferencePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}