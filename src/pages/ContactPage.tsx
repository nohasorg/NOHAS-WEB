import { useState, type FormEvent } from "react"

import PageShell from "@/components/layout/PageShell"

import ArrowIcon from "@/components/ui/ArrowIcon"

import PageHero from "@/components/ui/PageHero"

import SectionLabel from "@/components/ui/SectionLabel"

import { submitApiForm } from "@/lib/api"

const subjects = [
  "General Inquiry",
  "Volunteer",
  "Sponsorship",
  "Media",
  "Editorial",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState("")

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    setError("")

    const form = new FormData(event.currentTarget)

    try {
      await submitApiForm(
        "contact",
        Object.fromEntries(form.entries()) as Record<string, string>,
      )

      setSubmitted(true)

      event.currentTarget.reset()
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Please try again.",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageShell>
      <PageHero
        label="Start a conversation"
        title="Let’s make care more reachable."
        description="Questions about NOHAS, volunteering, partnerships, or our programs? We would be glad to hear from you."
      />
      <section className="section-shell" data-reveal>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel text="Get in touch" />
            <h2>We’re here to connect.</h2>
            <div className="mt-10 space-y-6">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  className="text-lg text-primary"
                  href="mailto:info.nohas@gmail.com"
                >
                  info.nohas@gmail.com
                </a>
              </div>
              <div>
                <p className="eyebrow">Website</p>
                <p className="text-lg">nohasorg.pk</p>
              </div>
              <div>
                <p className="eyebrow">Office</p>
                <p className="text-lg">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
            <div className="mt-9 border-t border-stone/30 pt-6">
              <p className="eyebrow">Follow the work</p>
              <div className="mt-3 grid gap-2 text-sm">
                <a
                  href="https://www.instagram.com/nohasorg.pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  Instagram · nohasorg.pk
                </a>
                <a
                  href="https://www.facebook.com/nohasorg.pk/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  Facebook · nohasorg.pk
                </a>
                <a
                  href="https://www.linkedin.com/company/nohas/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary"
                >
                  LinkedIn · NOHAS
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label>
              Name
              <input required name="name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" />
            </label>
            <label className="sm:col-span-2">
              Subject
              <select name="subject" defaultValue="General Inquiry">
                {subjects.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              Message
              <textarea required name="message" rows={5} />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                className="button-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
                <ArrowIcon />
              </button>
              {submitted && (
                <p role="status" className="text-sm text-primary">
                  Message received. Thank you.
                </p>
              )}
              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  )
}
