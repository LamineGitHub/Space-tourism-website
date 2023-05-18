import { Outlet } from "react-router-dom"
import Header from "../components/header"

const RoutLayout = () => {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop">
      <div className="container mx-auto">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RoutLayout
