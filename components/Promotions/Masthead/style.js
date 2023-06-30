import tw from "twin.macro";
import styled from "styled-components";

export const MastheadWrapper = styled.div`
  ${tw`text-white lg:pt-[0] 
    pb-[80px]
    lg:w-full lg:left-0
    relative z-[1] w-[100vw] h-full`}
`;

export const MastheadInner = styled.div`
  position: relative;
  z-index: 1;
  ${tw`gap-32px`}
  .swiper-pagination{
    top: auto !important;
    bottom: -20px;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 100% !important;
    ${tw`flex justify-center`}
  }
  .swiper-pagination-bullet{
    ${tw`bg-gray opacity-100 mx-[5px]`}
  }
  .swiper-pagination-bullet-active{
    ${tw`bg-black`}
  }
`;

export const ContainerPromotion = styled.div`
    ${tw`max-w-[1040px] m-auto w-full lg:max-w-[85%] xl:px-[24px]`}
`

export const MastheadContent = styled.div`
  ${tw` lg:max-w-full ml-auto`}

`;