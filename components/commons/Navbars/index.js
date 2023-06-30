import { StyleNavbars, StyleText, StyleIcon } from "./style";
import Image from "../Image"

const Navbars = ({ list = [
  { name: "Events", value: 0 },
  { name: "From Guide", value: 1 },
  { name: "best performances", value: 2 }
] }) => {

  return <StyleNavbars>
    {list.map((item, index) => {
      <StyleItemNav>
        {item.name}
      </StyleItemNav>
    })}
  </StyleNavbars>
}
export default Navbars
