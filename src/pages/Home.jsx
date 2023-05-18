import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container flex flex-col items-center text-center justify-evenly gap-9">
      <h3 className="font-BarlowCondensed">SO, YOU WANT TO TRAVEL TO</h3>
      <h1>SPACE</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <div className="relative flex items-center justify-center w-40 h-40 rounded-full cursor-pointer bg-tertiary ">
        <span className="absolute inline-flex w-full h-full rounded-full opacity-75 hover:animate-ping bg-tertiary"></span>
        <Link
          to="/destination"
          className="text-secondary font-Bellefair font-[20px] relative inline-flex rounded-full tracking-widest leading-6"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  )
}

export default Home
