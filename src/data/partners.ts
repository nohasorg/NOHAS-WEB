export type PartnerTier = "Platinum" | "Gold" | "Silver" | "Community Partner"

export interface Partner {
  name: string

  tier: PartnerTier
}

export const partners: Partner[] = [
  { name: "DENTALCARE", tier: "Platinum" },

  { name: "CARE+", tier: "Gold" },

  { name: "ORALIS", tier: "Gold" },

  { name: "MEDI", tier: "Silver" },

  { name: "GREEN SMILE", tier: "Community Partner" },

  { name: "COMMUNITY FIRST", tier: "Community Partner" },
]
