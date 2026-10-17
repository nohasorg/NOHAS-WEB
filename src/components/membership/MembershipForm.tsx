import { useState } from "react"

import ArrowIcon from "@/components/ui/ArrowIcon"
import type { Member, MembershipType } from "@/types/member"

interface MembershipFormProps {
  onSuccessfulRegistration: (member: Member) => void
}

const initialForm = {
  fullName: "",
  email: "",
  designation: "",
  institution: "",
  city: "",
  phone: "",
  membershipType: "Student" as MembershipType,
  agreement: false,
}

export default function MembershipForm({ onSuccessfulRegistration }: MembershipFormProps) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitMessage, setSubmitMessage] = useState("")

  const validate = () => {
    const nextErrors: Record<string, string> = {}

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required."
    if (!form.email.trim()) nextErrors.email = "Email address is required."
    if (!form.designation.trim()) nextErrors.designation = "Designation is required."
    if (!form.institution.trim()) nextErrors.institution = "Institution is required."
    if (!form.city.trim()) nextErrors.city = "City is required."
    if (!form.agreement) nextErrors.agreement = "You must agree to the code of conduct."

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email."
    }

    return nextErrors
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const members = JSON.parse(localStorage.getItem("nohas_members") ?? "[]") as Member[]

    const existing = members.find(
      (member) => member.email.toLowerCase() === form.email.trim().toLowerCase(),
    )

    if (existing) {
      setSubmitMessage(
        "An account with this email already exists. Go to Download Certificate to retrieve yours.",
      )
      return
    }

    const member: Member = {
      id: `NOHAS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      designation: form.designation.trim(),
      institution: form.institution.trim(),
      city: form.city.trim(),
      phone: form.phone.trim() || undefined,
      membershipType: form.membershipType,
      agreement: true,
      joinedAt: new Date().toISOString(),
    }

    const nextMembers = [...members, member]
    localStorage.setItem("nohas_members", JSON.stringify(nextMembers))

    setSubmitMessage(
      "Thank you for joining NOHAS. Your membership has been recorded successfully.",
    )
    setForm(initialForm)
    setErrors({})
    onSuccessfulRegistration(member)
  }

  return (
    <div className="mx-auto max-w-2xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Become a member
        </p>
        <h2 className="mt-3 text-3xl">Join the NOHAS network</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          Full Name
          <input
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.fullName ? <span className="text-xs font-normal normal-case text-red-700">{errors.fullName}</span> : null}
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          Email Address
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.email ? <span className="text-xs font-normal normal-case text-red-700">{errors.email}</span> : null}
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          Designation / Profession
          <input
            value={form.designation}
            onChange={(event) => setForm((current) => ({ ...current, designation: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.designation ? <span className="text-xs font-normal normal-case text-red-700">{errors.designation}</span> : null}
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          Institution / Organization
          <input
            value={form.institution}
            onChange={(event) => setForm((current) => ({ ...current, institution: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.institution ? <span className="text-xs font-normal normal-case text-red-700">{errors.institution}</span> : null}
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          City
          <input
            value={form.city}
            onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.city ? <span className="text-xs font-normal normal-case text-red-700">{errors.city}</span> : null}
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-1">
          Phone Number
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground sm:col-span-2">
          Membership Type
          <select
            value={form.membershipType}
            onChange={(event) => setForm((current) => ({ ...current, membershipType: event.target.value as MembershipType }))}
            className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Associate">Associate</option>
          </select>
        </label>

        <label className="sm:col-span-2">
          <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4">
            <input
              type="checkbox"
              checked={form.agreement}
              onChange={(event) => setForm((current) => ({ ...current, agreement: event.target.checked }))}
              className="mt-1 h-4 w-4 accent-primary"
            />
            <span className="text-sm text-stone-700">
              I agree to abide by NOHAS Pakistan&apos;s code of conduct and uphold oral health awareness in my community.
            </span>
          </div>
          {errors.agreement ? <span className="mt-2 block text-xs text-red-700">{errors.agreement}</span> : null}
        </label>

        <div className="sm:col-span-2">
          <button type="submit" className="inline-flex items-center gap-3 rounded-xl bg-green-700 px-8 py-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-green-800">
            Submit Application <ArrowIcon />
          </button>
        </div>
      </form>

      {submitMessage ? (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          {submitMessage}
        </div>
      ) : null}
    </div>
  )
}
