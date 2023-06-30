import tw from "twin.macro";
import styled from "styled-components";

export const PostWrapper = styled.div`
  ${tw`bg-white text-white pt-[80px] lg:pt-[0] relative pb-[60px]`}
`;

export const NavStyle = styled.div`
  ${tw`col-span-3 lg:col-span-12`}
`;

export const PostInner = styled.div`
position: relative;
z-index: 1;
  ${tw`grid-cols-12 gap-32px lg:gap-[0]`}
`;

export const PostContent = styled.div`
  ${tw`col-span-9 lg:col-span-12`}
`;

export const PostImageWrapper = styled.div`
  ${tw`text-black max-w-[80%] md:max-w-full`}
`;

export const PostImageInnerItem = styled.div`
  ${tw`flex flex-col lg:mb-25px lg:last:mb-0 max-w-full lg:max-w-full w-full lg:items-start`}
`;

export const PostImageInner = styled.div`
  ${tw`lg:flex-col lg:items-end`}
`;

export const ButtonPost = styled.div`
  ${tw`flex justify-end lg:ml-auto`}
`;

export const DatePost = styled.div`
  ${tw`mt-[20px] lg:mt-[24px] mb-[12px] capitalize lg:text-light`}
`;

export const HeadingPost = styled.div`
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
  ${tw`lg:ml-[0] z-10 mb-[12px] `}
`;

export const PostImageInnerImg = styled.div`
  ${tw`relative lg:max-w-full w-full sm:min-h-[199px] h-full`}
  &>div{
    ${tw`lg:max-w-full w-full min-h-[400px] sm:min-h-[199px] h-full lg:min-h-[291px]`}
  }
  img {
    ${tw`w-full`}
  }
  span{
    &:after{
      // content: '';
      background: linear-gradient(270deg, #FFFFFF -0.08%, rgba(255, 255, 255, 0.85) 19.12%, rgba(255, 255, 255, 0) 44.6%);
      @media screen and (max-width: 992px) {
        background: transparent
      }
      ${tw`w-full h-full absolute`}
    }
  }
`;

export const PostImageContentInner = styled.div`
  &::first-letter{
    font-size: 40px;
    line-height: 48px;
    padding: 0 2px;
  }
  a{
    word-break: break-word;
    text-decoration: underline;
    ${tw`text-red`}
  }
  ${tw`text-black text-medium lg:text-normal font-normal w-full mt-[48px] lg:mt-[24px] sm:mt-[15px] md:max-w-[100%] w-full lg:ml-0 text-justify
 
  `}
  br{
    ${tw`
      pb-[24px]
    `}
  }
  p{
    ${tw`
      pb-[16px]
      sm:pb-[10px]
    `}
  }
  ul {
    ${tw`m-0`}
    li{
      ${tw`list-disc`}
    }
  }
`;


export const PostImageContent = styled.div`
  ${tw`relative pb-[60px] border-0
  border-b
  border-solid
  border-black`}
`;

export const StyleLinkSource = styled.div`
  ${tw`text-red text-medium`}
`
