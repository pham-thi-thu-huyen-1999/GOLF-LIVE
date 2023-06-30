import tw from "twin.macro";
import styled from "styled-components";

export const SlideAnnoucementStyle = styled.div`
  ${tw`h-[43px] flex items-center text-white relative overflow-hidden`}
  }
  background-image: linear-gradient(#2b88d8, #001f78);
`;
export const StyleListAnnoucementText = styled.div`${tw`flex items-center`}  
    >div {
      ${tw`
        pl-[32px]
        pr-[16px]
        capitalize
        rounded-[10px]
        text-normal
        flex
        items-center
        relative
      `}
      letter-spacing: 1.2px;
      white-space: nowrap;
      &:before {
        content: '';
        height: 8px;
        width:8px;
        background:white;
        border-radius:50%;
        left: 0;
        top: 50%;
        position: absolute;
        left: 0;
        transform: translateY(-50%);
      }
}`
