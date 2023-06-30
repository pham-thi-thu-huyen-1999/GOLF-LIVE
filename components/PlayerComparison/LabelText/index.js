import Heading from "@Component/commons/Heading";
import { StyleLabelText, StyleLabel } from "./style";

const LabelText = ({ item, compares }) => {
  const name = item.replace("_", " ")
  return <StyleLabelText>
    <Heading tagName="h3" mode="heading-h3" color="gray-500">
    {compares[item]}
    </Heading>
    <StyleLabel>
      {name}
    </StyleLabel>
  </StyleLabelText>
}
export default LabelText
