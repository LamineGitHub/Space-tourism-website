import { NavLink } from "react-router-dom"
import { navInfo } from "../constant/navLink"

// eslint-disable-next-line react/prop-types
export function NavBar({ toogle }) {
  return (
    <nav
      className={`bg-[#ffffff0a] backdrop-blur-[40.7742px] fixed text-right transition-transform ease-out ${
        toogle ? "translate-x-full" : "translate-x-0"
      } sm:relative sm:top-0 sm:translate-x-0`}
    >
      <div className="flex flex-col gap-8 text-left sm:flex-row sm:gap-11 sm:py-10 lg:py-8 sm:px-12 lg:px-20 xl:px-32">
        {navInfo.map((nav) => (
          <NavLink
            to={nav.link}
            key={nav.number}
            className="relative sm:py-2 lg:py-0 lg:px-0"
          >
            <span className="mr-3 font-bold sm:hidden lg:inline">
              {nav.number}
            </span>
            {nav.text}
            <span className="absolute w-1 h-full left-full sm:-bottom-10 lg:-bottom-8 sm:left-0 sm:w-full sm:h-1 bar bg-tertiary"></span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
