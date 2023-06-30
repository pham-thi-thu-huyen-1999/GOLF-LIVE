import tw from "twin.macro";
import styled from "styled-components";

export const MastheadWrapper = styled.div`
  ${tw`text-white lg:pt-[0] pb-[320px] lg:pb-[135px] relative z-[1] w-[100vw] lg:w-full left-[-20vw] lg:left-0`}
`;

export const MastheadBg = styled.div`
    pointer-events: none;
  ${tw`absolute z-2 h-full w-full lg:max-h-[500px] bottom-0 lg:z-1`}
`;

export const NavStyle = styled.div`
  ${tw`col-span-2 `}
`;

export const MastheadInner = styled.div`
position: relative;
z-index: 1;
  ${tw`gap-32px lg:gap-[0]`}
`;

export const MastheadContent = styled.div`
  ${tw`max-w-[calc(100% - 266px)] lg:max-w-full m-auto`}
  .swiper{
    ${tw`pb-[24px]`}
  }
  .swiper-pagination{
    ${tw`flex justify-end bottom-0`}
  }
  .swiper-pagination-bullet{
    ${tw`bg-gray opacity-100`}
  }
  .swiper-pagination-bullet-active{
    ${tw`bg-red`}

  }
`;

