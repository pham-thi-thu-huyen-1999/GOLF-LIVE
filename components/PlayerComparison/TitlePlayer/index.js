import Heading from "@Component/commons/Heading";
import ImageComp from "@Component/commons/Image";
import ReactCountryFlag from "react-country-flag"
import { StyleTitle } from "./style";

const TitlePlayer = ({ name = "", country = "US" }) => {
  return <StyleTitle>
    <ReactCountryFlag
      countryCode={country}
      svg
      style={{
        width: '20px',
        height: '20px',
      }}
      title={country}
    />
    <Heading tagName="h4" mode="heading-h4" row>
      {name}
    </Heading>
  </StyleTitle>
}
export default TitlePlayer
