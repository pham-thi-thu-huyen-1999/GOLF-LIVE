import { StyleMasthead, StyleTitle } from "./style";
import ImageComp from "@Component/commons/Image";
import LogoTour from "/public/images/tours/logo_tour.png";
import Heading from "@Component/commons/Heading";
import Breadcrumb from "@Component/commons/Breadcrumb";

const MastheadTourDetail = ({ title }) => {
  return <StyleMasthead>
    {/* <ImageComp img={LogoTour} width="249px" height="146px" priority={true}/> */}
    <StyleTitle>
      <Breadcrumb />
      <Heading tagName="h3" mode="heading-h3">
        {title}
      </Heading>
    </StyleTitle>
  </StyleMasthead>
}
export default MastheadTourDetail
