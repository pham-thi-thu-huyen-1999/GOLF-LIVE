import tw from "twin.macro";
import styled from "styled-components";
import { checkStaging } from 'utils/checkStaging'

export const ShareWithWrapper = styled.div`
  ${tw`bg-[transparent] text-gray-500 md:pt-[0] absolute right-0 top-[300px] md:top-[-24px] `}
`;

export const ShareWithInner = styled.div`
  ${tw`flex justify-between md:flex-col`}
  ${
    tw`
      bg-no-repeat
      bg-contain
      bg-right
      md:bg-bottom
      z-1
      relative
      pr-[50px]
      md:pr-[10px]
    `
  }
  &::after{
    background-image: url(${checkStaging()}images/detail/golf-live.png);
    ${tw`
      content
      absolute
      h-[535px]
      w-[187px]
      bg-no-repeat
      bg-contain
      bg-top
      z-[-1]
      top-[20px]
      right-[20%]
      md:bg-center
      md:content-[none]
  `}
  }
  &::before{
      background-image: url("${checkStaging()}images/detail/ball.png");
      ${tw`
        // content
        absolute
        h-[187px]
        w-[187px]
        bg-no-repeat
        bg-contain
        bg-bottom
        z-[-1]
        right-0
        top-[-100px]
        md:bg-center
        md:content-[none]
        opacity-[0.35]
    `}
  }
`;
export const ShareWithContent = styled.div`
  ${tw`space-y-[65px] md:space-y-[20px] opacity-0`}
`;
export const ShareWithItem = styled.li`
  ${tw`flex  md:mb-25px md:last:mb-0`}
`;
export const ShareWithItemText = styled.a`
  ${tw`text-normal font-normal`}
`;

export const ShareWithListItem = styled.ul`
  ${tw`flex space-x-[55px] p-0 md:block md:space-x-0 md:max-w-[274px] w-full`}
  @media screen and (max-width: 992px) {
    column-count: 2;
    page-break-inside: avoid;
    -moz-column-break-inside: avoid;
    break-inside: avoid;
  }
 
`;
export const ShareWithLink = styled.a`
  ${tw`text-medium font-extra-bold uppercase`}
`;
export const ShareWithContentText = styled.div`
  ${tw`text-medium font-extra-bold uppercase h-[113px] flex items-center`}
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
export const ShareWithSocialMedia = styled.ul`
  ${tw`flex space-y-[30px] md:space-y-[22px] p-0 flex-col items-center`}
`;
export const ShareWithSocialMediaItem = styled.li`
  ${tw`border-b-2 `}
`;
