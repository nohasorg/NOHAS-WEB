export type EventStatus = "upcoming" | "completed"

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  status: EventStatus
  description: string
  registrationUrl?: string
  image?: string
  tags?: string[]
}

export const upcomingEvents: Event[] = [
  {
    id: "oral-health-summit",
    title: "Oral Health Awareness Summit",
    date: "18 Nov 2026",
    time: "10:00 AM PKT",
    location: "Lahore",
    status: "upcoming",
    description: "A citywide community forum focused on prevention, public education, and accessible oral healthcare.",
    registrationUrl: "https://example.com/register",
    tags: ["Seminar", "Community"],
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "school-screening-drive",
    title: "School Screening Drive",
    date: "02 Dec 2026",
    time: "9:30 AM PKT",
    location: "Karachi",
    status: "upcoming",
    description: "Public screening and oral health education for students, teachers, and families.",
    registrationUrl: "https://example.com/karachi-drive",
    tags: ["Camp", "Schools"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "digital-awareness-webinar",
    title: "Digital Awareness Webinar",
    date: "16 Dec 2026",
    time: "7:00 PM PKT",
    location: "Online",
    status: "upcoming",
    description: "A practical digital session for parents, students, and community volunteers on daily oral care.",
    tags: ["Webinar"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
  },
]

export const pastEvents: Event[] = [
  {
    id: "community-camp-2025",
    title: "Community Oral Care Camp",
    date: "14 May 2025",
    time: "9:00 AM PKT",
    location: "Islamabad",
    status: "completed",
    description: "A successful screening and awareness camp that reached families through local partnerships.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Camp"],
  },
  {
    id: "student-outreach-2025",
    title: "Student Outreach Week",
    date: "09 Mar 2025",
    time: "11:00 AM PKT",
    location: "Multan",
    status: "completed",
    description: "Hands-on education and volunteer-led awareness activities in local schools and neighborhoods.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Workshop"],
  },
  {
    id: "national-dental-day",
    title: "National Dental Day",
    date: "21 Jan 2025",
    time: "10:30 AM PKT",
    location: "Peshawar",
    status: "completed",
    description: "A wider public campaign to support prevention, diagnosis, and early referrals.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Awareness"],
  },
]

export const events: Event[] = [...upcomingEvents, ...pastEvents]
