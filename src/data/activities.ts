export type ActivityCategory = "outreach" | "camps" | "workshops" | "seminars"

export type Province = "Punjab" | "Sindh" | "KPK" | "Balochistan" | "Federal"

export interface Activity {
  id: string

  category: ActivityCategory

  title: string

  place: string

  province: Province

  year: string

  description: string

  image?: string

  participants?: number
}

export const activities: Activity[] = [
  {
    id: "lahore-school-2026",

    category: "outreach",

    title: "Lahore school screening",

    place: "Lahore",

    province: "Punjab",

    year: "2026",

    description: "Community dental screening program at local schools.",

    image:
      "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1000&q=80",

    participants: 120,
  },

  {
    id: "community-care-sindh-2026",

    category: "camps",

    title: "Community care day",

    place: "Karachi",

    province: "Sindh",

    year: "2026",

    description: "Free dental care day for underserved communities.",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",

    participants: 95,
  },

  {
    id: "mobile-unit-punjab-2025",

    category: "camps",

    title: "Mobile dental unit",

    place: "Punjab",

    province: "Punjab",

    year: "2025",

    description: "Mobile dental unit deployed for rural outreach.",

    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",

    participants: 80,
  },

  {
    id: "family-oral-health-workshop",

    category: "workshops",

    title: "Family oral health workshop",

    place: "Lahore",

    province: "Punjab",

    year: "2025",

    description:
      "An interactive session on practical preventive care for families.",

    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: "student-prevention-panel",

    category: "seminars",

    title: "Prevention in community dentistry",

    place: "Islamabad",

    province: "Federal",

    year: "2025",

    description: "A student and practitioner panel on accessible prevention.",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },

  {
    id: "community-screening-sindh",

    category: "outreach",

    title: "Community screening day",

    place: "Hyderabad",

    province: "Sindh",

    year: "2024",

    description: "Volunteer-led oral health screening and referral support.",

    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
  },
]
