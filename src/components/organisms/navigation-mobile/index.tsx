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
      {isOpen ? <div data-mobile-nav-panel className={cn('flex-1 -mr-4 pr-4 bg-black/2 transition-colors pl-4 pb-4')}><ul className="flex flex-col items-end gap-4">{navigationData.map(el =>
        <li key={el.title}><a href={el.url}>{el.title}</a></li>
      )}</ul></div> : null}
    </div>
  )
}
