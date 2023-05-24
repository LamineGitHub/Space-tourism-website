import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/header"
import { bgPages } from "../utils/bgPages"

const RoutLayout = () => {
  const { pathname } = useLocation()

  return (
    <div
      className={`w-screen h-screen bg-no-repeat bg-cover ${bgPages(pathname)}`}
    >
      <Header />

      <div className="container mx-auto">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RoutLayout
