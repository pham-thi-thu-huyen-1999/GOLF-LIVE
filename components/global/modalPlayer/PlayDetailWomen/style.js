import tw from 'twin.macro'
import styled from 'styled-components'

const StylePlayCard =  tw.div`
    pb-[50px]
`;
const TitleTablePlayerScroll =  tw.div`
    desktop:overflow-x-scroll
    w-full
`;

export const StatisticsText = styled.div`
    ${tw`text-medium
    lg:pb-[5px]
    lg:text-normal`}
    mx-[20px]
    span{
        ${tw`ml-[16px]`}
    }
`
export const StylesHeaderStatistics =  tw.div`
    flex
    text-normal
    text-gray-500
    lg:pb-0
    items-center
    justify-between
    gap-x-[24px]
    md:block
    uppercase
    text-white
`;

const StylesDetailPlayerHeader =  styled.div`
    ${tw`
        flex 
        z-1
        items-end
        mb-[48px]
        md:flex-wrap
        md:justify-start
        md:gap-y-[12px]
    `}
 }
`;

export const StylesDetailPlayerInner =  tw.div`
    p-[12px]
    ml-[24px]
    bg-green
    rounded-[10px]
    z-1
    w-full
    md:ml-0
`;

export const StylesDetailPlayerInnerHeading =  styled.div`
    ${tw`
        inline-block
        space-x-[12px]
        sm:justify-end
        relative
        mb-[24px]
        md:mb-[12px]
    `}
`;

export const StylesCountryFlag =  tw.div`
  w-[45px]
  h-[45px]
  lg:w-[25px]
  lg:h-[25px]
`;

export const StylesDetailPlayerInnerContent =  tw.div`
    lg:pt-[8px]
    h-auto
    mt-0
`;

const TitleTablePlayerContent =  tw.div`
        lg:max-w-[992px]
        lg:w-[992px]
`;

export const StylesWorldNumber =  styled.div`
   ${tw`
    text-medium
    items-center
    flex
    lg:text-light
   `}
   span{
    ${tw`
        lg:text-bold
        font-semi-bold
        pl-[12px]
    `}
   }
`;

export const StyleAvata =  styled.div`
    ${tw`max-w-[318px]
    min-w-[150px]
    h-[272px]
    w-full
    z-9
    sm:h-[146px]
    sm:top-[48px]
    sm:items-end
    sm:left-0`}
    flex-basis: 40%;
`;


const StyleItemColor = tw.div`
    flex
    items-center
`
const StyleColor = styled.div`
   ${
    tw`
        p-[14px]
        rounded-[3px]
        mr-[8px]
    `
   }
   ${
    props => {
        if(props.$color){
            return `background: ${props.$color}`
        }
    }
   }
`
export {StylePlayCard,TitleTablePlayerContent,TitleTablePlayerScroll, StyleItemColor, StyleColor, StylesDetailPlayerHeader}
