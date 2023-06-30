import tw from 'twin.macro'
import styled from 'styled-components'
import { ScrollBar } from '@Styles/scroll'

const StyleComponnentNavbar = styled.div`
  ${tw`
    max-w-[266px]
    lg:max-w-[100%]
    absolute
    z-9
    bg-[#F9F9F9]
    rounded-[10px]
    p-[17px]
    h-[100vh]
    top-[80px]
    2xl:p-[5px]
    lg:w-0
    lg:text-white
    lg:top-0
    lg:pt-[112px]
    lg:fixed
    lg:opacity-[1]
    lg:h-0
    lg:z-2
    lg:overflow-y-scroll
    lg:left-0
    lg:p-0
    lg:bg-black
    lg:w-full
    lg:rounded-[0]
  `}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: height .5s ease .2s;
  transform: translateY(0);
  align-self: flex-start;
  ${props => {
    if (props.$isShowMobile) {
      return "transition: height .5s ease .2s, transform: translateY(100%);" && tw`
        lg:h-[100vh]
        opacity-100
      `}
    }
  }}
  &.fixed{
    ${tw`sticky top-0 h-[100vh]`}
    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  }
  &.fixed-nav{
    ${tw`bottom-[212px] top-0 sticky`}
  }
  ${ScrollBar}{
    ${tw`lg:pr-0`}
  }
`

const StyleListNavigation = styled.div`
  ${tw`
      p-0
      lg:pt-[100px]
      lg:pb-[47px]
      lg:max-w-[90%]
      lg:m-auto
      md:max-w-[95%]
  `}
`
const StyleHeaderNavbar = tw.div`
  hidden
  lg:flex
  items-center
  absolute
  w-full
  bg-black
  h-[70px]
  z-[9]
`
const StyleCloseButton = tw.div`absolute left-[16px]`
const StyleHeadingFavorite = tw.div`
  flex
  w-full
  items-center
  cursor-pointer
  mb-[24px]
  bg-green
  rounded-[10px]
  text-white
  p-[10px]
  relative
`
const StyleNumberFavs = tw.div`absolute bg-red p-[5px] rounded-[5px] right-[10px] font-bold`

export { StyleComponnentNavbar, StyleListNavigation, StyleHeaderNavbar, StyleCloseButton, StyleHeadingFavorite, StyleNumberFavs  }
