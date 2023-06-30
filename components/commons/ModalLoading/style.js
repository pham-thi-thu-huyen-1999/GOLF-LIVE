import tw from 'twin.macro'
import styled from 'styled-components'
import {motion} from "framer-motion"

export const TitlePlayer =  tw.div`
    text-bold
    font-extra-bold
    text-black
    uppercase
    sm:pt-[12px]
    sm:text-medium
`;

export const StylesPlayerModalInner =  styled(motion.div)`
    ${tw`
        z-9
        lg:w-full
        xl:w-[calc(100% - 60px)]
    `}
`;


export const TitleTablePlayer =  tw.div`
    text-bold
    font-extra-bold
    text-black
    uppercase
    mb-[12px]
`;

export const StylesDetailPlayer =  tw.div`
    flex
    items-center
    // pt-[77px]
    pb-[20px]
    sm:pt-[48px]
    sm:pb-[48px]
    sm:flex-col
    sm:items-start
`;

export const StylesDetailPlayerContent =  tw.div`
    ml-[61px]
    sm:ml-[0]
    sm:pt-30px
`;

export const StylesHeaderInfo =  tw.div`
    flex
    flex-col
    text-normal
    font-bold
    text-gray-500
    uppercase
    space-y-[5px]
    `;

export const StyleModalLoading =  styled.div`
    ${tw`
        fixed
        top-0
        left-0
        w-full
        h-full
        z-20
    `}
    ${props => {
        if(props.$active){
            return tw`flex justify-center`
        }else{
            return tw`hidden`
        }
    }}
`;
export const StylesDetailInner =  styled.div`
    ${tw`
        relative
        lg:w-full
        h-full
        px-[32px]
        lg:px-[12px]
    `}
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`w-[986px]`
            default:
                return tw`w-[880px]`
        }
    }}
`;

export const StylesPlayerModalBox =  styled.div`
    ${tw`
        rounded-[8px] 
        lg:rounded-[0] 
        relative
        z-2
        lg:max-h-screen 
        lg:h-full
        relative 
        max-w-[880px]
        lg:w-full
        mx-auto
        z-[20]
        py-[50px]
        sm:pt-[32px]
        overflow-y-scroll
        flex
        items-center
        justify-center
    `}
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`max-w-[986px]`
            case 'no-data':
                return tw`w-[500px] px-[24px] h-[500px] text-center flex items-center justify-center text-[18px] font-bold`
            default:
                return tw`max-w-[880px]`
        }
    }}
    &::-webkit-scrollbar {
        width: 0;
        display: none;
      }
      &::-webkit-scrollbar-track {
        display: none;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        display: none;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb:hover {
        display: none;
        background: transparent;
      }
`;


export const StyleModalWapper =  tw.div`
    flex
    items-center
    justify-center
    lg:items-center
    relative 
    z-20
    w-full 
    h-full
`;

export const StyleOverlay  =  tw.div`
    absolute
    cursor-pointer
    bg-black
    opacity-[0.9]
    top-[0]
    left-[0]
    w-screen
    h-full
    z-1
`;
