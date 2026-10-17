import { useEffect, useState } from "react"

import type { Comment } from "@/types/comment"

const STORAGE_KEY = "nohas_comments"

const emptyForm = {
  name: "",
  experience: "",
  imageUrl: "",
}

export default function CommentBar() {
  const [comments, setComments] = useState<Comment[]>([])
  const [form, setForm] = useState(emptyForm)
  const [submitError, setSubmitError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Comment[]
        setComments(parsed)
      }
    } catch {
      setComments([])
    } finally {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    if (!isReady || typeof window === "undefined") return

    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments))
  }, [comments, isReady])

  useEffect(() => {
    if (!successMessage) return

    const timer = window.setTimeout(() => setSuccessMessage(""), 3000)
    return () => window.clearTimeout(timer)
  }, [successMessage])

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setForm((current) => ({ ...current, imageUrl: typeof reader.result === "string" ? reader.result : "" }))
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = form.name.trim()
    const experience = form.experience.trim()

    if (!name || !experience || experience.length < 10) {
      setSubmitError("Please enter your full name and a message of at least 10 characters.")
      return
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      name,
      experience,
      imageUrl: form.imageUrl || undefined,
      timestamp: new Date().toISOString(),
    }

    setComments((current) => [newComment, ...current])
    setForm(emptyForm)
    setSubmitError("")
    setSuccessMessage("Your experience has been shared! Thank you.")
  }

  return (
    <section className="bg-stone-50 py-16" aria-label="Community comments and reflections">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mb-10">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Community reflections
          </p>
          <h2 className="mt-3 text-4xl">Share your experience</h2>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
              Full Name
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="min-h-12 rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </label>
            <div className="flex items-end">
              <label className="grid w-full gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
                Upload a photo (optional)
                <input type="file" accept="image/*" onChange={handleImage} className="block w-full rounded-xl border border-stone-300 bg-white px-3 py-3 text-sm text-stone-600 file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
              </label>
            </div>
          </div>

          <label className="mt-5 grid gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
            Your Experience
            <textarea
              rows={4}
              maxLength={500}
              value={form.experience}
              onChange={(event) => setForm((current) => ({ ...current, experience: event.target.value }))}
              className="min-h-[120px] rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Tell us how the event or campaign made an impact on you."
            />
          </label>

          {form.imageUrl ? (
            <img src={form.imageUrl} alt="Preview" className="mt-5 max-h-44 rounded-xl object-cover" />
          ) : null}

          {submitError ? <p className="mt-4 text-sm text-red-700">{submitError}</p> : null}
          {successMessage ? (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              {successMessage}
            </div>
          ) : null}

          <div className="mt-6 flex justify-end">
            <button type="submit" className="rounded-xl bg-green-700 px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-green-800">
              Share Experience
            </button>
          </div>
        </form>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {comments.length === 0 ? (
            <div className="md:col-span-2 rounded-2xl border-2 border-dashed border-stone-300 bg-white p-10 text-center text-stone-500">
              <p className="text-lg font-semibold">No experiences shared yet. Be the first!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <article key={comment.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {comment.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-jet">{comment.name}</p>
                    <p className="text-xs text-stone-500">
                      {new Date(comment.timestamp).toLocaleDateString("en-PK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-stone-600">{comment.experience}</p>

                {comment.imageUrl ? (
                  <img src={comment.imageUrl} alt={`${comment.name}'s experience`} className="mt-4 max-h-48 rounded-xl object-cover" />
                ) : null}
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
