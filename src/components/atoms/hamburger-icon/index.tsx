

export default function HamburgerIcon({ className }: { className?: string }) {
  return (
   <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
   >
    <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
   </svg>
  )
}
