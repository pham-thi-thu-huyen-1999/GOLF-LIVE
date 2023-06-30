import tw from "twin.macro";
import styled from "styled-components";

export const CardItemWrapper = styled.div`
  ${tw`text-black lg:pb-[24px] sm:lg:w-full`}
`;

export const CardItemContent = styled.div`
  ${tw`flex flex-col items-start text-left h-full w-full mt-[32px] justify-between`}
`;

export const CardItemInner = styled.div`
  ${tw`flex flex-col items-start h-full cursor-pointer`}
`;

export const HeadingMasthead = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 992px) {
    -webkit-line-clamp: 3;
  }                  
  ${tw`z-10`}
`;

export const CardItemImg = styled.div`
  ${tw`relative w-full block`}
  &>div{
    ${tw`w-full min-h-[156px] sm:min-h-[99px]`}
  }
  img{
    ${tw`w-full h-[234px] `}
    object-fit: cover;
  }
`;
export const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${tw`mt-[24px]`}
`
export const ContentItem = styled.div``