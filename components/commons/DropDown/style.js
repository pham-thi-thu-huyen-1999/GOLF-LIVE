import tw from 'twin.macro'
import styled from 'styled-components'
import {motion} from "framer-motion"

const StyleDropDown = styled.div``
const StyleDropdownHeading = styled.div`
  ${tw`
      flex
      w-full
      items-center
      cursor-pointer
      mb-[24px]
      bg-green
      rounded-[10px]
      text-white
      p-[10px]
    `
  }
  ${(props) => {
    if (props.$line) {
      return tw`border-0 border-b-[1px] border-b-black border-solid pb-[15px] md:border-b-white`
    }
  }}
`
const StyleDropdownHeadingItem = styled.div`
  ${tw`
      flex
      w-full
      items-center
      cursor-pointer
      mb-[14px]
      p-[6px]
      pl-[20px]
    `
  }
  ${(props) => {
    if (props.$line) {
      return tw`border-0 border-b-[1px] border-b-black border-solid pb-[15px] md:border-b-white`
    }if(props.$selected){
      return tw`bg-[#E7E7E7] rounded-[5px] lg:bg-[#9e9e9e99]`
    }
  }
  }
  svg {
    ${tw`ml-auto`
  }
  }
`
const StyleTitle = styled.h4`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  ${tw`
    overflow-hidden
    cursor-pointer
    uppercase
    text-[18px]
    m-0
    font-normal
  `}
`
const StyleBigTitle = styled.h4`
  ${tw`
    cursor-pointer
    uppercase
    text-[18px]
    m-0
    font-normal
    pl-[10px]
  `}
`
const StyleDropDownDesc = tw.div`
  mb-[24px]
`

const StyleItem = styled.div`
  ${tw`
    pl-[20px]
    leading-[28px]
    h-[28px]
    overflow-hidden
  `}
  a{
    ${tw`
      lg:text-white
      no-underline
      `
    }
  }
  ${props => {
      if(props.$activeLinkTour){
        return tw`text-green !opacity-[1]`
      }
      if(props.$activeLink){
        return tw`bg-[#E7E7E7] rounded-[5px] lg:bg-[#9e9e9e99] lg:font-bold`
      }
    }
  }
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`
const StyleDropDownItem = styled.ul`
  ${tw`pl-0 list-disc`}
  li{
    &:nth-child(odd){
      &::before{
        ${tw`
          text-[red]
        `}
      }
    }
  }
`
const StyleItems = styled(motion.ul)`
  ${
    tw`
      list-none
      pl-0
      max-h-[135px]
      overflow-y-scroll
      mb-[22px]
      md:text-white
    `
  }
  &::-webkit-scrollbar {
    ${
      tw`
        w-[2px]
        bg-gray
      `
    }
  }
  &::-webkit-scrollbar-thumb {
    ${
      tw`
        bg-black
        border-[2px] border-solid border-black
      `
    }
  }
  ${StyleItem}{
    ${tw`opacity-[0.5]`}
    ${(props) => {
        if(props.$activeLink){
          return tw`text-green`
        }
      }
    }
  }
`

const StyleItemDetail = styled.li`
  ${tw`relative`}
  &::before{
    content: ".";
    left: 5px;
    ${tw`
      w-[5px]
      h-[5px]
      top-0
      absolute
      rounded-[10px]
      text-[30px]
      leading-[10px]
    `}
  }
`
const StyleTitleItems = styled.h4`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  ${tw`
    overflow-hidden
    cursor-pointer
    text-normal
    m-0
    font-normal
    mr-[10px]
  `}
`
const StyleIconDropdown = tw.div`
  ml-auto
`
const StyleIconHeading = tw.div`bg-white rounded-[100%] p-[5px] w-[34px] h-[34px]`
const StyleDropdownItem = tw.div``
export { StyleDropDown, StyleDropdownHeading, StyleTitle, StyleDropDownDesc, 
  StyleItem, StyleDropDownItem, StyleItems, 
  StyleDropdownItem, StyleItemDetail, StyleTitleItems,
  StyleBigTitle, StyleDropdownHeadingItem, StyleIconHeading, StyleIconDropdown }