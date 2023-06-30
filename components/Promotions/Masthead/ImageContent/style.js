import tw from "twin.macro";
import styled from "styled-components";

export const ImageContentWrapper = styled.div`
  ${tw`text-white text-black flex`}
  &:after {
    ${tw`h-full absolute top-0 left-0 w-full h-full`}
    content: "";
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  ${
    props => {
      if(props.$background){
        return `
          background-image: url(${props.$background});
          background-size: cover;
          height: 560px;
          background-position: top center;
          @media screen and (max-width: 992px){
            height: 360px;
          }
        `
      }
    }
  }
`;

export const ImageContentItem = styled.div`
  ${tw`flex flex-col
    top-1/2
    left-[200px]
    lg:mb-25px
    lg:last:mb-0 max-w-[355px] 
    lg:max-w-[calc(100% - 70px)] 
    w-full lg:items-start z-1`}
`;

export const ImageContentInner = styled.div`
  ${tw`justify-center lg:justify-start
  lg:flex-col 
  lg:items-center
  max-h-[560px] h-full
  `}
`;

export const HeadingMasthead = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${tw`lg:ml-[0] z-10 mb-[12px] text-green`}
`;

export const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${tw`text-white text-medium 
    lg:text-normal font-normal max-w-[355px]
    lg:max-w-full mt-[60px] z-9
    lg:mt-[30px]
    md:mt-[16px]
    `}
`;
