import { StyleButton, StyleText, StyleIcon } from "./style";
import Image from "../Image"

const Button = ({ type = "submit", size = "small", icon = "", children, bg = "red", href = "#", disabled = false,
  onClick = (event) => { event.preventDefault() }, color }) => {

  return <StyleButton
    className={`${type} ${size}`}
    theme={{ bg }}
    onClick={onClick}
    href={href}
    $disabled={disabled}
    $color={color}>
    {icon && (
      <StyleIcon>
        <Image img={icon} width={"100%"} height={"100%"} />
      </StyleIcon>
    )}
    <StyleText>
      {children}
    </StyleText>
  </StyleButton>
}
export default Button
