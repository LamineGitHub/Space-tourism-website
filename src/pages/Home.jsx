import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-evenly text-center lg:text-left mt-[6vh] sm:mt-[10vh] lg:mt-[15vh]">
      <div className="flex flex-col items-center lg:items-start lg:w-3/5">
        <h3 className="mb-6 font-BarlowCondensed">SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p className="py-[7vh] sm:py-12">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="relative flex items-center justify-center w-32 h-32 rounded-full cursor-pointer sm:w-52 sm:h-52 bg-tertiary sm:mt-14">
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
