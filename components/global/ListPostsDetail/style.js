import tw from "twin.macro";
import styled from "styled-components";
import { checkStaging } from 'utils/checkStaging'


export const ListPostsDetailWrapper = styled.section`
    ${
        tw`
          lg:pb-[80px]
          bg-no-repeat
          bg-contain
          bg-right
          md:bg-bottom
          md:bg-cover
          z-1
          relative
          lg:mx-[-12px]
        `
    }
    background-image: url(${checkStaging()}images/detail/Background-2.png);
    &::before{
        background-image: url("${checkStaging()}images/detail/bg-golf.png");
        ${tw`
            content
            absolute
            h-full
            w-[16%]
            bg-no-repeat
            bg-contain
            bg-bottom
            z-[-1]
            left-0
            bottom-0
            md:bg-center
            lg:content-[none]
        `}
    }
`

export const NavStyle = styled.div`
  ${tw`col-span-3 `}
`;

export const ListPostsDetailInner = styled.div`
  ${tw`grid grid-cols-12 gap-32px lg:gap-[0] lg:px-[12px]`}
`;

export const ListPostsDetailContent = styled.div`
  ${tw`col-span-9 lg:col-span-12 relative`}
  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    background: #000000;
    width: 59%
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 48px;
    padding-bottom: 8px; 
    @media screen and (max-width: 992px) {
      padding-top: 32px;
    }
  }
  .swiper-slide {
    height: auto !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    align-items: flex-start;
  }
  .swiper-pagination{
    ${tw`flex justify-end top-0 bottom-[unset] lg:top-[unset] lg:bottom-0`}
    span{
      ${tw`!mx-[7.5px]`}
    }
  }
  .swiper-pagination-bullet{
    ${tw`bg-gray opacity-100`}
  }
  .swiper-pagination-bullet-active{
    ${tw`bg-red`}
  }
`;

