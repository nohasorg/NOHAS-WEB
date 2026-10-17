import { useState } from "react"

import type { Member } from "@/types/member"

interface CertificateDownloadProps {
  defaultEmail?: string
}

export default function CertificateDownload({ defaultEmail = "" }: CertificateDownloadProps) {
  const [email, setEmail] = useState(defaultEmail)
  const [member, setMember] = useState<Member | null>(null)
  const [error, setError] = useState("")

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const members = JSON.parse(localStorage.getItem("nohas_members") ?? "[]") as Member[]
    const found = members.find(
      (item) => item.email.toLowerCase() === email.trim().toLowerCase(),
    )

    if (!found) {
      setMember(null)
      setError("No membership found for this email. Please register first.")
      return
    }

    setMember(found)
    setError("")
  }

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Certificate lookup
        </p>
        <h2 className="mt-3 text-3xl">Download your certificate</h2>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your registered email address"
          className="min-h-12 flex-1 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button type="submit" className="rounded-xl bg-green-700 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-green-800">
          Search
        </button>
      </form>

      {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}

      {member ? (
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f9f7f0] p-6 text-center shadow-inner md:p-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            N
          </div>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            National Oral Health Awareness Society
          </p>
          <p className="mt-2 font-serif text-3xl text-jet">NOHAS Pakistan</p>
          <h3 className="mt-6 font-serif text-4xl text-primary">Certificate of Membership</h3>
          <p className="mt-6 text-lg text-stone-700">This certifies that</p>
          <p className="mt-4 font-serif text-4xl text-jet">{member.fullName}</p>
          <p className="mt-5 text-base text-stone-700">
            is a registered <span className="font-semibold text-primary">{member.membershipType}</span> member of NOHAS Pakistan.
          </p>

          <div className="mt-8 grid gap-6 border-t border-stone-300 pt-6 text-left md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">Membership ID</p>
              <p className="mt-2 font-semibold text-jet">{member.id}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">Member Since</p>
              <p className="mt-2 font-semibold text-jet">
                {new Date(member.joinedAt).toLocaleDateString("en-PK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-stone-300 pt-6 md:grid-cols-2">
            <div>
              <p className="font-serif text-2xl text-jet">President</p>
              <div className="mt-2 h-px w-24 bg-primary" />
            </div>
            <div>
              <p className="font-serif text-2xl text-jet">Secretary</p>
              <div className="mt-2 h-px w-24 bg-primary" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
