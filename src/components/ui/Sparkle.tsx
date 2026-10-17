interface SparkleProps {
  className?: string
}

export default function Sparkle({ className = "" }: SparkleProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="M8 0 9.4 6.6 16 8l-6.6 1.4L8 16 6.6 9.4 0 8l6.6-1.4L8 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
