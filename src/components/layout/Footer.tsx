import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-green-900 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 font-display text-xl font-bold tracking-[0.18em] text-white"
          >
            <span className="nohas-emblem-dark flex h-16 w-14 items-center justify-center">
              <img
                src="/assets/nohas-logo-transparent.png"
                alt="NOHAS logo"
                className="nohas-emblem"
              />
            </span>
            <span>NOHAS</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-green-100">
            Improving oral health across Pakistan, one community at a time.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-green-400">
            Contact
          </p>
          <div className="space-y-2 text-sm text-green-100 leading-relaxed">
            <p>
              <a href="mailto:info@nohas.pk" className="hover:text-white transition-colors">
                Email: info@nohas.pk
              </a>
            </p>
            <p>Phone: +92 300 0000000</p>
            <p>Address: Lahore, Pakistan</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-green-400">
            Follow Along
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-green-300">
            <a href="https://www.facebook.com/nohasorg.pk/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
            <span>·</span>
            <a href="https://www.instagram.com/nohasorg.pk/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <span>·</span>
            <a href="https://www.linkedin.com/company/nohas/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-green-800 pt-6 text-center text-xs text-green-500">
        © 2026 NOHAS Pakistan. All rights reserved.
      </div>
    </footer>
  )
}
