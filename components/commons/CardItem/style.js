import tw from "twin.macro";
import styled from "styled-components";

export const CardItemWrapper = styled.div`
  ${tw`text-black lg:pb-[24px] w-[calc((100% /3) - 20px )] lg:w-[calc((100% /2) - 20px )] sm:lg:w-full`}
`;

export const CardItemContent = styled.div`
  ${tw`flex flex-col items-start space-y-[10px] text-left h-full w-full`}
`;

export const CardItemInner = styled.div`
  ${tw`flex flex-col items-start space-y-[10px] h-full cursor-pointer`}
`;

export const ButtonMasthead = styled.div`
  ${tw`flex justify-end ml-auto !mt-auto pt-[10px]`}
`;

export const DateMasthead = styled.div`
  ${tw`capitalize text-light lg:text-thin`}
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
    ${tw`rounded-[10px] w-full h-[234px] `}
    object-fit: cover;
  }
`;
