export type MembershipType = "Student" | "Professional" | "Associate"

export interface Member {
  id: string
  fullName: string
  email: string
  designation: string
  institution: string
  city: string
  phone?: string
  membershipType: MembershipType
  agreement: boolean
  joinedAt: string
}
