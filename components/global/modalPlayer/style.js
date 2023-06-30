import tw from 'twin.macro'
import styled from 'styled-components'
import {motion} from "framer-motion"

export const TitlePlayer =  tw.div`
    text-semi-bold
    font-extra-bold
    text-black
    uppercase
    sm:pt-[12px]
    sm:text-bold
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
    lg:py-[24px]
    sm:flex-col
    sm:items-start
`;

export const StylesDetailPlayerContent =  tw.div`
    ml-[61px]
    sm:ml-[0]
    lg:pt-[12px]
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

export const StyleModalPlayer =  styled.div`
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
        w-full
    `}
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`max-w-[986px]`
            default:
                return tw`max-w-[880px]`
        }
    }}
`;

export const StylesPlayerModalBox =  styled.div`
    ${tw`
        bg-white
        rounded-[8px] 
        md:rounded-[0] 
        relative
        z-2
        lg:max-h-screen 
        lg:h-full
        md:h-[100vh]
        relative 
        lg:w-full
        mx-auto
        z-[20]
        py-[50px]
        sm:pt-[32px]
        h-[90vh]
        overflow-y-scroll
        flex
        justify-center
        items-center
        w-full
        min-w-[50%]
    `}
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`max-w-[986px]`
            default:
                return tw`max-w-full`
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

export const StylesIconClose =  styled.i`
    ${tw`
        absolute 
        top-[-20px]
        right-[32px] 
        lg:right-[24px] 
        cursor-pointer 
        flex
        z-9
    `}
    svg{
        ${tw`h-[29.7px] w-[29.7px] opacity-100 hover:opacity-80`}
    }
`;

export const StyleModalPlayerWapper =  tw.div`
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

export const StyleAvt = styled.div`
    ${tw`
            relative
            rounded-full
            w-[100px]
            h-[100px]
            bg-[rgba(152,193,34,0.5)]
        `
    }
    &:before {
        ${tw`
                absolute
                bg-[#98C122]
                w-[80%]
                h-[80%]
                content
                left-[50%]
                top-[50%]
                rounded-full
            `
    }
        transform: translate(-50%, -50%);
        box-shadow: 0px 4px 2px #98c122;
    }
    &:after {
        ${props => {
        if (props.$image) {
            return `
                background-image: url("${props.$image}");
            `
        }
    }}
        ${tw`
            w-full
            h-[224px]
            content
            right-0
            bottom-0
            absolute
            bg-bottom
            bg-contain
            bg-no-repeat
            rounded-full
            md:max-w-[184px]
        `}
    }

`