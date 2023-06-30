import tw from "twin.macro";
import styled from "styled-components";

export const ListPostsWrapper = styled.div`
  ${tw`text-white relative`}
  .swiper-pagination{
    ${tw`bottom-[-10px]`}
    .swiper-pagination-bullet-active{
      ${tw`bg-red`}
    }
  }
`;

export const ListPostsInner = styled.div`
    margin: 0 -16px;
  ${tw``}
`;
export const ListPostsContent = styled.div`
  .infinite-scroll-component{
    ${tw`flex flex-wrap gap-[30px] justify-center 2xl:px-[10px]`}
    &>div{
      ${tw`w-[calc(100% /3 - 20px)] lg:w-[calc((100% /2) - 20px )] sm:w-full`}
    }
  }
`;