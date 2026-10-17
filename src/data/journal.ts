export type ArticleTag = "Field report" | "Clinical insight" | "Student voice" | "Oral hygiene" | "Research"

export interface Article {
  id: string

  tag: ArticleTag

  title: string

  excerpt: string

  date: string

  author?: string

  readTime?: string
}

export const articles: Article[] = [
  {
    id: "school-screening-prevention",

    tag: "Field report",

    title: "What a school screening teaches us about prevention",

    excerpt:
      "A field perspective on meeting children where prevention can make a lasting difference.",

    date: "2026",

    readTime: "5 min read",
  },

  {
    id: "healthier-gums-choices",

    tag: "Clinical insight",

    title: "The everyday choices behind healthier gums",

    excerpt:
      "Small, repeatable habits can support healthier gums at every age.",

    date: "2026",

    readTime: "4 min read",
  },

  {
    id: "community-service-care",

    tag: "Student voice",

    title: "Learning care through community service",

    excerpt:
      "A dental student's reflection on listening, trust, and service in the field.",

    date: "2026",

    readTime: "6 min read",
  },

  {
    id: "guide-for-families",

    tag: "Oral hygiene",

    title: "A practical guide for families",

    excerpt:
      "Clear oral hygiene routines families can make part of everyday life.",

    date: "2026",

    readTime: "3 min read",
  },
]
