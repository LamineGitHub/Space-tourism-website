import { NavLink } from "react-router-dom"
import { navInfo } from "../constant/navLink"
import logoIcon from "../assets/shared/logo.svg"

const Header = () => {

  return (
    <>
      <header className=" text-tertiary">
        <img src={logoIcon} className="w-10 h-10 ml-4" alt="Logo" />


        <nav
        >
          <div >
            {navInfo.map((nav) => (
              <NavLink
                to={nav.link}
                key={nav.number}
              
              >
           
                {nav.text}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
