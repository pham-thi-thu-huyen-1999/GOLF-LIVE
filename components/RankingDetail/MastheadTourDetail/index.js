import { StyleMasthead, StyleTitle } from "./style";
import Heading from "@Component/commons/Heading";
import Breadcrumb from "@Component/commons/Breadcrumb";

const MastheadTourDetail = ({ title }) => {
  return <StyleMasthead>
    <StyleTitle>
      <Breadcrumb title={title}/>
      <Heading tagName="h3" mode="heading-h3">
        {title}
      </Heading>
    </StyleTitle>
  </StyleMasthead>
}
export default MastheadTourDetail
