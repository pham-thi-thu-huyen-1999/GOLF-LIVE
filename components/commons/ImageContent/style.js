import tw from "twin.macro";
import styled from "styled-components";

export const ImageContentWrapper = styled.div`
  ${tw`text-white lg:pb-[24px] text-black`}
`;

export const ImageContentItem = styled.div`
  ${tw`flex flex-col lg:mb-25px lg:last:mb-0 max-w-[355px] lg:max-w-[calc(100% - 70px)] w-full lg:items-start relative`}
`;

export const ImageContentInner = styled.div`
  ${tw`flex justify-center lg:justify-start space-x-[37px] lg:space-x-[0] lg:flex-col lg:items-center`}
`;

export const ButtonMasthead = styled.div`
  ${tw`flex justify-end lg:ml-auto`}
`;

export const DateMasthead = styled.div`
  ${tw`mt-[43px] lg:mt-[24px] mb-[12px] capitalize lg:text-light`}
`;
export const StyleButtonLink = tw.a`text-red border-0 border-b border-b-[0.5px] border-solid`

export const HeadingMasthead = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${tw`lg:ml-[0] z-10 mb-[12px]`}
`;

export const ImageContentImg = styled.a`
  ${tw`relative block lg:max-w-full w-full h-[500px] 2xl:min-h-[370px] sm:min-h-[199px] h-full`}
  &>div{
    ${tw`lg:max-w-full w-full min-h-[360px] sm:min-h-[199px]`}
  }
  &:after{
    content: '';
    background: linear-gradient(270deg, #FFFFFF -0.08%, rgba(255, 255, 255, 0.85) 19.12%, rgba(255, 255, 255, 0) 44.6%);
    @media screen and (max-width: 992px) {
      background: transparent
    }
    ${tw`w-full h-full absolute right-[-2px]`}
  }
  img{
    ${tw`w-full h-full`}
  }
`;

export const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${tw`text-gray-500 text-medium lg:text-normal font-normal max-w-[355px] lg:max-w-full mb-[33px] lg:mb-[20px]`}
`;
export const StyleLabelCate = styled.div`
  ${tw` absolute 
  left-[100px] top-[42px] pl-3
  capitalize
  rounded-[10px] text-red text-normal font-semi-bold
  lg:top-[24px] lg:text-light`}
  &:before {
    content: '';
    height: 8px;
    width:8px;
    background:red;
    border-radius:50%;
    left: 0;
    top: 50%;
    position: absolute;
    left: 0;
    transform: translateY(-50%);
  }
`
