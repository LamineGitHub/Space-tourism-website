import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const DestinationLayout = () => {
  return (
    <>
      <h3>
        <span>01</span> Pick your destination
      </h3>

      <nav className="text-tertiary">
        <NavLink to="moon">Moon</NavLink>
        <NavLink to="mars">Mars</NavLink>
        <NavLink to="europa">Europa</NavLink>
        <NavLink to="titan">Titan</NavLink>
      </nav>

      <Outlet />
    </>
  )
}

export default DestinationLayout
