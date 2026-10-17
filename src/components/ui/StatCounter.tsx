import { useCountUp } from "@/hooks/useCountUp"

interface StatCounterProps {
  value: number

  suffix?: string

  label: string
}

export default function StatCounter({
  value,
  suffix = "",
  label,
}: StatCounterProps) {
  const [display, ref] = useCountUp(value, { suffix })

  return (
    <div className="impact-stat">
      <strong ref={ref}>{display}</strong>
      <span>{label}</span>
    </div>
  )
}
