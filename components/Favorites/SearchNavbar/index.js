import { StyleSearchNavbar, StyleItemNav } from "./style";
import Link from "next/link";
import { useState } from "react";

const SearchNavbar = () => {
  const [selectNav, setSelectNav] = useState(0);
  const navbars = [
    {
      name: "Timeline"
    },
    {
      name: "Yesterday"
    }
    ,
    {
      name: "Live"
    }
  ]

  const onFilterByDay = (event, index) => {
    setSelectNav(index), event.preventDefault()
  }
  return <StyleSearchNavbar>
    {navbars.map((item, index) => {
      return <StyleItemNav
        key={`nav-${index}`}
        onClick={(event) => onFilterByDay(event, index)}
        $active={selectNav === index}
        >
        {/* <Link href="#"> */}
          {item.name}
        {/* </Link> */}
      </StyleItemNav>
    })}
  </StyleSearchNavbar>
}
export default SearchNavbar
