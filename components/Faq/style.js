import tw from "twin.macro";
import styled from "styled-components";

export const StyleFAQ = styled.div`
  ${tw`w-full`}
`;
export const MastheadWrapper = styled.div`
  ${tw`w-full flex flex-row lg:flex-col gap-x-[140px] justify-between`}
`;
export const LeftContent = styled.div`
  ${tw`max-w-[30%] lg:max-w-full lg:text-center w-full lg:ml-auto
  `}
  h2{
    ${tw`lg:text-left lg:mt-24`}
  }
  a {
    ${tw`mb-24`}
  }
  .img-faq {
    ${tw`m-auto ml-[calc(-100vw / 78.5)] lg:ml-auto`}
  }
  .heading-faq{
    ${tw`lg:mt-24 lg:mb-16`}
  }

`
export const RightContent = styled.div`
  ${tw`lg:max-w-full w-full flex-[0 0 70%]`}
`

export const StyleTitle = styled.div`
  ${tw`text-normal font-bold pl-24px relative`}
  &:before{
    content:"";
    ${tw`h-[2px] w-[14px] bg-green absolute left-0 top-[9.5px]`}
  }
  &:after{
    content:"";
    transform:translateY(4px) rotate(0deg);
    transition:all .325s ease;
    ${tw`h-[14px] w-[2px] bg-green absolute left-[6px] top-0`}
  }
`

export const StyleIconClick = styled.div`
  ${tw`flex items-center ml-auto`}
  svg {
    transition: .3s;
  }
`
export const StyleContentDetail = styled.p`
  ${tw`text-left overflow-hidden h-0 duration-300 text-normal ease-out max-w-[626px] pl-24px border-0 border-l border-solid border-green mx-auto`}
`

export const StyleItemFAQ = styled.div`
  ${tw`py-24px border-0 border-b border-solid border-gray last:border-0
    sm:first:pt-[0]
  `}

  &.active {
    ${StyleTitle}{
      ${tw`text-green`}
      &:after{
                transform:translateY(4px) rotate(90deg);

      }
    }
    ${StyleContentDetail}{
      ${tw`h-auto mt-24px duration-300 ease-in`}
    }
    ${StyleIconClick}{
      svg{
        transform: rotate(-180deg);
      }
    }
  }
`

export const StyleLineTitle = styled.div`
  ${tw`flex items-baseline cursor-pointer text-left flex-auto lg:gap-x-[10px]`}
  transition: 0.3s all ease-in-out;
  `
export const StyleListFaq = tw.div`mt-32px`

export const StyleButtonSeemore = styled.div`${tw`max-w-[300px] lg:text-center lg:flex mt-[44px] sm:max-w-full`}`
