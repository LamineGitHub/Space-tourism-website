import { useState } from "react"
import { NavLink } from "react-router-dom"
import { navInfo } from "../constant/navLink"
import logoIcon from "../assets/shared/logo.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import hamburgerIcon from "../assets/shared/icon-hamburger.svg"

const Header = () => {
  const [toogle, setToogle] = useState(false)

  const handleClick = () => {
    return setToogle((prevToogle) => !prevToogle)
  }

  return (
    <>
      <header className="relative z-10 flex items-center justify-between pb-8 text-tertiary">
        <img src={logoIcon} className="w-10 h-10 ml-4" alt="Logo" />

        <button className="z-20 m-6" onClick={handleClick}>
          <img
            src={toogle ? hamburgerIcon : closeIcon}
            className="aspect-square"
            alt="button toogle navBar"
          />
        </button>

        <nav
          className={`bg-[#ffffff0a] backdrop-blur-[40.7742px] fixed text-right transition-transform ease-out ${
            toogle ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="flex flex-col gap-8 text-left">
            {navInfo.map((nav) => (
              <NavLink
                to={nav.link}
                key={nav.number}
                className="flex items-center"
              >
                <span className="mr-3 font-bold">{nav.number}</span>
                {nav.text}
                <span className="absolute right-0 w-1 h-8 bar bg-tertiary"></span>
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
