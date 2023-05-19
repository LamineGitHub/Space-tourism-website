import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container flex flex-col items-center justify-evenly text-center">
      <div className="flex flex-col items-center">
        <h3 className="font-BarlowCondensed mb-6">SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p className="py-[7vh] sm:py-12">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="relative flex items-center justify-center w-40 h-40 sm:w-60 sm:h-60 rounded-full cursor-pointer bg-tertiary sm:mt-14">
        <span className="absolute inline-flex w-full h-full rounded-full opacity-75 hover:animate-ping bg-tertiary"></span>
        <Link
          to="/destination"
          className="text-secondary font-Bellefair text-[20px] sm:text-3xl relative inline-flex rounded-full tracking-widest leading-6"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  )
}

export default Home
