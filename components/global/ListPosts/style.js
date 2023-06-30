import tw from "twin.macro";
import styled from "styled-components";
import { CardItemWrapper } from "@Component/commons/CardItem/style";

export const ListPostsWrapper = styled.div`
  ${tw`text-white relative pb-[80px]`}
  ${
    props => {
      if(props.$relatived){
        const renderStyle =  `{${CardItemWrapper}{padding-bottom: 0}}`
        return `padding-bottom: 80px; ${renderStyle} @media screen and (max-width: 768px){
          padding-bottom: 60px;
        }`
      }
    }
  }
`;
export const StylePagination = styled.div`
  ${tw`absolute`}
  left: 50%;
  bottom: -20px !important;
  transform: translateX(-50%);
  .swiper-pagination-bullet-active{
    ${tw`bg-red`}
  }
  
  ${
    props => {
      if(props.$relatived){
      return`
          top: -65px;
          bottom: auto !important;
          left: auto !important;
          right: 20px;
          transform: none !important;
          @media screen and (max-width: 768px){
            top: -40px;
          }
        `
      }
    }
  }
`

export const ListPostsInner = styled.div`
  ${tw`grid-cols-12 gap-32px lg:gap-[0] relative`}
`;
export const StyleGroupPost = styled.div`${tw`flex gap-[30px] w-full flex-wrap`} 
  justify-content: start;`
export const ListPostsContent = styled.div`
  ${tw`
    w-full
    // col-span-9 
    // lg:col-span-12 
    // mx-[-30px]
    lg:mx-[-8px]`}
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-grid-column>.swiper-wrapper {
    // flex-wrap: wrap;
    flex-wrap: wrap;
    // flex-direction: initial;
    ${
      props => {
        if(props.$relatived){
         `.swiper-pagination-horizontal{
              top: 0;
              bottom: auto;
          }
          .swiper-pagination-bullet{
            background: #fff !important;
          }
          `
          return tw`flex-nowrap`
        }
      }
    }
  }

  .swiper-slide {
    height: auto !important;
    display: flex;
    align-items: start;
    width: 100% !important;   
    @media screen and (max-width: 992px) {
      padding: 0 8px
    }
  }

  .swiper-pagination-bullet{
    ${tw`bg-gray opacity-100`}
  }
`;
export const StyleTitleList = styled.div`
  ${tw`flex items-center justify-center text-center mb-24px text-bold`}
  h3 {
    ${tw`text-green font-bold`}
  }
`
export const StyleContentList = styled.div``
