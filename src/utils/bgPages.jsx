export const bgPages = (pathname) => {
  const path = pathname.split("/").slice(1).toString()

  switch (path) {
    case "destination":
      return "bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop"

    case "crew":
      return "bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop"

    case "technology":
      return "bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop"

    default:
      return "bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop"
  }
}
