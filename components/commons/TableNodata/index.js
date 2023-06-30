import { StyleNodata, StyleContentNodata } from "./style";
import { Container, ContainerChildren } from "@Styles/container";

const TableNodata = ({ text = "Updating Data!" }) => {

  return <StyleNodata>
    <Container>
      <StyleContentNodata>
        {text}
      </StyleContentNodata>
    </Container>
  </StyleNodata>
}
export default TableNodata
