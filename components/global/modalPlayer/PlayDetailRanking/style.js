import tw from 'twin.macro'
import styled from 'styled-components'

const StylePlayCard =  tw.div`
// overflow-x-scroll
    pb-[50px]
`;
const TitleTablePlayerScroll =  tw.div`
    desktop:overflow-x-scroll
    w-full

`;



export const StylesHeaderStatisticsText =  tw.div`
    text-medium
    font-extra-bold
    text-white
    uppercase
    lg:pb-[5px]
    lg:text-normal
`;
export const StylesHeaderStatistics =  tw.div`
    flex
    text-normal
    font-bold
    text-gray-500
    justify-between
    pb-[5px]
    lg:pb-0
    border-solid
    border-0
    border-b-[1px]
    border-b-white
    mb-20px
    lg:mb-[24px]
    items-center
    px-[12px]
`;

const StylesDetailPlayerHeader =  styled.div`
    ${tw`
    flex 
    relative 
    z-1 
    items-end 
    mb-[48px]
    sm:flex-wrap
    sm:flex-col
    sm:items-start
    `}
    &:before{
        ${tw`
            content-[''] absolute bg-green h-[142px] w-full z-0 bottom-0
        `}
 }

`;

export const StylesDetailPlayerInner =  tw.div`
  z-1
  space-y-[24px]
  sm:space-y-[0]
  ml-auto
  sm:max-w-[604px]
`;

export const StylesDetailPlayerInnerHeading =  styled.div`
    ${tw`
        inline-block
        space-x-[12px]
        pl-[10px]
        sm:justify-end
        sm:w-[50%]
        sm:ml-auto
        sm:items-end
        sm:pb-[12px]
        sm:min-h-[146px]
        sm:h-full
        sm:flex
        relative
    `}
    &::before{
        background: url("/images/players/holes-light.png");
        ${tw`
            content
            bg-center
            absolute
            w-[128px]
            h-[128px]
            right-[-90px]
            top-[-50px]
            lg:w-[96px]
            lg:h-[96px]
            lg:right-[20px]
            lg:top-[-80px]
            sm:w-[74px]
            sm:h-[74px]
            sm:right-[45px]
            sm:top-[30px]
            bg-no-repeat
            bg-contain
            z-[-1]
        `
    }
    }
`;

export const StylesCountryFlag =  tw.div`
  w-[45px]
  h-[45px]
  lg:w-[25px]
  lg:h-[25px]
`;

export const StylesDetailPlayerInnerContent =  tw.div`
    pt-[6px]
    pb-[20px]
    lg:pt-[8px]
    lg:pb-[8px]
    // pr-[30px]
    // pl-[10px]
    h-auto
    bg-green
`;

const TitleTablePlayerContent =  tw.div`
        lg:max-w-[992px]
        lg:w-[992px]
`;

export const StylesWorldNumber =  styled.div`
   ${tw`
    text-medium
    font-normal
    text-white
    items-center
    flex
    lg:text-light
   `}
   span{
    ${tw`
        text-semi-bold
        lg:text-bold
        font-semi-bold
        pl-[12px]
    `}
   }
`;

export const StyleAvata =  tw.div`
        max-w-[318px]
        h-[272px]
        w-full
        z-9
        sm:max-w-[50%]
        sm:h-[146px]
        sm:top-[48px]
        sm:absolute
        sm:items-end
        sm:left-0
`;

const StyleListColor = tw.div`
    flex
    gap-[18px]
    pt-[24px]
    pb-[50px]
`

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
export {StylePlayCard,TitleTablePlayerContent,TitleTablePlayerScroll, StyleListColor, StyleItemColor, StyleColor, StylesDetailPlayerHeader}
