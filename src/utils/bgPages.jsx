/**
 * Returns a string representing the appropriate background class based on the given pathname.
 *
 * @param {string} pathname - The pathname to check for specific keywords.
 * @return {string} The appropriate background class string.
 */
export const bgPages = (pathname) => {
  const path = pathname.split("/").slice(1)

  // Use an object instead of multiple if-else statements for O(1) lookup time
  const classByPath = {
    destination:
      "bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop",

    crew: "bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop",

    technology:
      "bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop",
  }

  // Use Array.prototype.find for O(n) lookup time instead of Array.prototype.includes for O(n^2) lookup time
  const foundPath = Object.keys(classByPath).find((key) => path.includes(key))

  // Return the appropriate background class string or a default value
  return foundPath
    ? classByPath[foundPath]
    : "bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop"
}
