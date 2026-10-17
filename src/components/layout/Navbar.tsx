import { useEffect, useState } from "react"

import { Link, NavLink, useLocation } from "react-router-dom"

type MenuItem = {
  label: string

  to: string

  children?: { label: string; to: string }[]
}

const menuItems: MenuItem[] = [
  {
    label: "About",

    to: "/about",

    children: [
      { label: "Our Story", to: "/about" },

      { label: "Vision & Mission", to: "/about#vision" },

      { label: "Leadership", to: "/team" },
    ],
  },

  {
    label: "Programs",

    to: "/programs",

    children: [
      { label: "Oral Health Education", to: "/programs#education" },

      { label: "Outreach Campaigns", to: "/programs#outreach" },

      { label: "Sustainable Practice", to: "/programs#sustainable" },
    ],
  },

  {
    label: "Activities",

    to: "/activities",

    children: [
      { label: "Community Outreach", to: "/activities/outreach" },

      { label: "Dental Camps", to: "/activities/camps" },

      { label: "Workshops", to: "/activities/workshops" },

      { label: "Seminars & Panels", to: "/activities/seminars" },
    ],
  },

  {
    label: "Our Team",

    to: "/team",

    children: [
      { label: "Executive Team", to: "/team/executive" },

      { label: "Volunteers", to: "/team/volunteers" },

      { label: "Founders", to: "/team#founders" },
    ],
  },

  {
    label: "Events",

    to: "/events",

    children: [
      { label: "National Events", to: "/events" },

      { label: "Annual Conference", to: "/events/conference" },

      { label: "Past Events", to: "/activities" },
    ],
  },

  { label: "Journal", to: "/journal" },

  { label: "Join Us", to: "/membership" },

  { label: "Sponsors", to: "/sponsors" },

  { label: "Contact", to: "/contact" },
]

function routeClass(active: boolean) {
  return `nav-link link-underline ${active ? "!text-primary" : ""}`
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  return (
    <>
      <nav
        data-motion="nav"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-[var(--dur-fast)] ${
          scrolled
            ? "bg-background/95 shadow-[0_8px_30px_rgba(43,43,43,0.08)] backdrop-blur"
            : "bg-background"
        }`}
      >
        <div className="mx-auto flex min-h-[84px] max-w-[1440px] items-center justify-between gap-5 px-5 lg:px-8">
          <Link
            to="/"
            aria-label="NOHAS home"
            className="flex shrink-0 items-center gap-3 font-display text-xl font-bold tracking-[0.22em] text-jet"
          >
            <img
              src="/assets/nohas-logo-transparent.png"
              alt=""
              className="nohas-emblem"
            />
            <span>NOHAS</span>
          </Link>
          <div className="hidden items-center gap-4 xl:flex">
            {menuItems.map((item) => (
              <div
                key={item.to}
                className="group relative py-7"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
                onFocusCapture={() => setActiveMenu(item.label)}
                onBlurCapture={(event) => {
                  const nextTarget = event.relatedTarget
                  if (
                    !(nextTarget instanceof Node) ||
                    !event.currentTarget.contains(nextTarget)
                  ) {
                    setActiveMenu(null)
                  }
                }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => routeClass(isActive)}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div
                    className="absolute left-0 top-full z-50 min-w-56 border border-accent bg-background p-2 shadow-xl transition-opacity duration-200"
                    style={{
                      visibility:
                        activeMenu === item.label ? "visible" : "hidden",
                      opacity: activeMenu === item.label ? 1 : 0,
                    }}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          `block px-4 py-3 font-display text-[10px] uppercase tracking-[0.1em] transition-colors hover:bg-background-alt hover:text-primary ${
                            isActive ? "text-primary" : "text-foreground/75"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="icon-button xl:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>
      </nav>
      <div
        aria-hidden={!open}
        inert={!open}
        className={`mobile-menu fixed inset-x-4 top-[84px] z-40 max-h-[calc(100dvh-100px)] overflow-y-auto border border-accent bg-background p-4 shadow-xl xl:hidden ${
          open ? "menu-open" : ""
        }`}
      >
        <div className="grid gap-1">
          {menuItems.map((item) => (
            <details key={item.to} className="border-b border-stone/30 py-2">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-display text-xs uppercase tracking-[0.12em] text-foreground">
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  {item.label}
                </NavLink>
                {item.children && <span aria-hidden="true">+</span>}
              </summary>
              {item.children && (
                <div className="grid pl-3">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className="min-h-11 border-t border-stone/20 py-3 font-display text-[10px] uppercase tracking-[0.1em] text-foreground/70"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </>
  )
}
