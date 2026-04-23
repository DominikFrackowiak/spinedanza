import { useState } from "react"
import { cn } from "../../../utils/cn"
import { navigationData } from "../../../constants/navigation"
import HamburgerIcon from "../../atoms/hamburger-icon"

export default function NavigationMobile({
  className
}: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={cn("text-white", className)}>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HamburgerIcon className="h-8 w-8" />
      </button>
      {isOpen ? <ul>{navigationData.map(el =>
        <li key={el.title}><a href={el.url}>{el.title}</a></li>
      )}</ul> : null}
    </div>
  )
}
