export type TeamYear = "current" | "2024-25" | "2023-24" | "2022-23" | "founding"

export type TeamDepartment = "executive" | "operational" | "regional"

export interface TeamMember {
  id: string

  name: string

  role: string

  department: TeamDepartment

  description: string

  year: TeamYear

  province?: string

  college?: string

  image?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "president-founder",

    name: "TBD",

    role: "President-Founder",

    department: "executive",

    description: "Strategic vision, direction, and partnerships.",

    year: "current",
  },

  {
    id: "secretary-establishment",

    name: "TBD",

    role: "Secretary Establishment",

    department: "executive",

    description: "Governance, setup, and compliance.",

    year: "current",
  },

  {
    id: "general-secretary",

    name: "TBD",

    role: "General Secretary",

    department: "executive",

    description: "Coordination, documentation, and communications.",

    year: "current",
  },

  {
    id: "secretary-outreach",

    name: "TBD",

    role: "Secretary Outreach Events",

    department: "operational",

    description: "Camp coordination and execution.",

    year: "current",
  },

  {
    id: "joint-secretary",

    name: "TBD",

    role: "Joint Secretary",

    department: "operational",

    description: "Volunteer management and resources.",

    year: "current",
  },

  {
    id: "regional-volunteer",

    name: "TBD",

    role: "Regional Volunteer Leads",

    department: "regional",

    description: "Local relationships and community trust.",

    year: "current",
  },
]
