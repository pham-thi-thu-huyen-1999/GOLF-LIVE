export const checkShowSideMenu = (pathname) => {
  if (pathname === ("/promotions" || "/about-us" || "faq")) {
    return false
  } else {
    return true
  }
}