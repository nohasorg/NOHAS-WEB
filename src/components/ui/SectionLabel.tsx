import Sparkle from "@/components/ui/Sparkle"

interface SectionLabelProps {
  text: string

  light?: boolean
}

export default function SectionLabel({
  text,
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`mb-4 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.14em] ${
        light ? "text-accent" : "text-primary"
      }`}
    >
      <Sparkle className="h-3.5 w-3.5" />
      <span>{text}</span>
    </div>
  )
}
