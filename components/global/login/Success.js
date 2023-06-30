import { StyleSuccess, StyleIcon, StyleText, StyleTextDesSuccess, StyleButtonSuccess } from "./style";
import Heading from '@Component/commons/Heading'
import { IconTick } from "../../commons/Icon";
import Button from "@Component/commons/Button";
import { setOverflowState } from "@Dto/states";

const Success = ({
  title = "Great!",
  text = "You have been login successful.",
  textButton = "Ok",
  onClick=(() => setOverflowState(false)) }) => {
  return <StyleSuccess>
    <StyleIcon>
      <IconTick />
    </StyleIcon>
    <StyleText>
      <Heading tagName="h4" mode="heading-h4" color="green">
        {title}
      </Heading>
      <StyleTextDesSuccess>
        {text}
      </StyleTextDesSuccess>
      <StyleButtonSuccess>
        <Button onClick={onClick} bg="green">
          {textButton}
        </Button>
      </StyleButtonSuccess>
    </StyleText>
  </StyleSuccess>
}
export default Success
