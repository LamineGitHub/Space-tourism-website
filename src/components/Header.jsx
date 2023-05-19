import { useState } from "react"
import logoIcon from "../assets/shared/logo.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import hamburgerIcon from "../assets/shared/icon-hamburger.svg"
import { NavBar } from "./NavBar"

const Header = () => {
  const [toogle, setToogle] = useState(true)

  const handleClick = () => {
    return setToogle((prevToogle) => !prevToogle)
  }

  return (
    <>
      <header className="relative z-10 flex items-center justify-between mb-9 sm:mb-24 text-tertiary">
        <img
          src={logoIcon}
          className="w-10 h-10 ml-4 sm:w-12 sm:h-12 sm:ml-10"
          alt="Logo"
        />

        <button className="z-20 m-6 sm:hidden" onClick={handleClick}>
          <img
            src={toogle ? hamburgerIcon : closeIcon}
            className="aspect-square"
            alt="button toogle navBar"
          />
        </button>

        <NavBar toogle={toogle}></NavBar>
      </header>
    </>
  )
}

export default Header
