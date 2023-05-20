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
      <header className="relative z-10 flex items-center justify-between mb-9 lg:pt-6 text-tertiary">
        <img
          src={logoIcon}
          className="w-9 h-9 sm:w-11 sm:h-11 sm:ml-10"
          alt="Logo"
        />

        <span className="hidden xl:inline w-[37%] h-0.5 bg-tertiary/25 absolute left-[10%] z-30"></span>

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
