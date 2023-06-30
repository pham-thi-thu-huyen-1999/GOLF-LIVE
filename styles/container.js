import tw from 'twin.macro'
import styled from 'styled-components'
import { checkStaging } from 'utils/checkStaging'
import exp from "constants";

export const Container = styled.div`
    ${tw`container mx-auto md:max-w-full 2xl:max-w-[95%]`}
`
export const ContainerChildren = styled.div`
    ${tw`max-w-[80%] ml-auto 2xl:max-w-[75%] lg:max-w-full md:ml-0`}
`

export const SideBarWrapper = styled.div`
    ${tw`flex mb-[80px] lg:mb-[60px] justify-end lg:mb-0`}
`
export const BigContainer = styled.div`
    ${tw`big-container mx-auto 2xl:px-[12px]
      relative
      grid lg:block
      min-h-[100vh]
    `}
    &.none-sidebar{
        ${tw`container mx-auto block max-w-full w-full after:hidden px-0`}
        &.hidden-ball{
            ${tw`before:hidden`}
        }
    }
    &::before{
        background-image: url("${checkStaging()}images/players/bg-comparison.png");
        ${tw`
            h-full
            w-[20%]
            content
            absolute
            bg-no-repeat
            bg-contain
            bg-bottom
            md:bg-center
            opacity-[0.5]
            lg:z-[-1]
        `}
    }
    &::after {
        background-image: url(${checkStaging()}images/players/Background-2.png);
        background-size: 100%;
        ${tw`
            content
            absolute
            h-full
            w-full
            bg-no-repeat
            bg-bottom
            z-[-1]
            right-0
            bottom-0
        `}
    }
    @media screen and (min-width: 1264px){
        grid-template-columns: 20vw 80vw;
    }
    @media screen and (max-width: 1264px){
        grid-template-columns: 25vw 75vw;
    }
    @media screen and (max-width: 992px){
        grid-template-columns: 0 100vw;
    }
`

export const ContainerLDP = styled.div`
    ${tw`max-w-[1088px] px-4 w-full mx-auto`}
`

export const WrapperLDP = styled.div`
    ${tw`pt-[60px] pb-[120px] lg:pt-[48px] lg:pb-[80px]`}
`
