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
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-11 sm:py-10 sm:px-12 text-left">
        {navInfo.map((nav) => (
          <NavLink to={nav.link} key={nav.number} className="sm:py-2 relative">
            <span className="mr-3 font-bold sm:hidden lg:block">
              {nav.number}
            </span>
            {nav.text}
            <span className="absolute left-full w-1 h-full sm:-bottom-10 sm:left-0 sm:w-full sm:h-1 bar bg-tertiary"></span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
