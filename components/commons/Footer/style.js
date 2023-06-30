import tw from "twin.macro";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  ${tw`bg-black text-white py-[60px] lg:py-[40px]`}
`;
export const FooterInner = styled.div`
  ${tw`flex justify-between lg:flex-col lg:space-y-[24px] lg:px-[12px]`}
`;
export const FooterFollow = styled.div`
  ${tw`space-y-[20px] flex justify-between gap-x-[64px] lg:gap-0 sm:block sm:gap-[30px]`}
`;
export const FooterContent = styled.div`
  ${tw`space-y-[20px]`}
`;
export const FooterItem = styled.li`
  ${tw`flex  lg:mb-25px lg:last:mb-0`}
`;
export const FooterItemText = styled.a`
  ${tw`text-normal font-normal`}
`;

export const FooterListItem = styled.ul`
  ${tw`flex space-x-[55px] p-0 lg:block lg:space-x-0 lg:max-w-[274px] w-full`}
  @media screen and (max-width: 992px) {
    column-count: 2;
    page-break-inside: avoid;
    -moz-column-break-inside: avoid;
    break-inside: avoid;
  }
 
`;
export const FooterLink = styled.a`
  filter: brightness(0) invert(1);
  ${tw`text-medium font-extra-bold uppercase`}
`;
export const FooterFollowText = styled.div`
  ${tw`text-medium font-extra-bold uppercase`}
`;
export const FooterSocialMedia = styled.ul`
  ${tw`flex space-x-[30px] p-0 lg:space-x-[52px] sm:space-x-[20px] sm:lg:justify-between`}
`;
export const FooterSocialMediaItem = styled.li`
  ${tw`border-b-2 `}
`;
export const FooterLogo = tw.div`m-auto lg:mt-[24px] cursor-pointer`
export const FooterGroupFollow = styled.div``