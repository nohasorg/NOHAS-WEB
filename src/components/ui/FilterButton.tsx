interface FilterButtonProps {
  label: string

  active: boolean

  onClick: () => void
}

export default function FilterButton({
  label,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`filter-button ${active ? "active" : ""}`}
    >
      {label}
    </button>
  )
}
