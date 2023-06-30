import tw from 'twin.macro'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyleCountries = styled.div`
    ${tw`
        max-h-[140px]
        uppercase
        ml-[30px]
        relative
        lg:hidden
        lg:bg-[rgba(0,0,0,0.9)]
    `}
    ${props => {
        if(props.$showCountries){
            return tw`
                lg:block
                lg:text-white
                z-9
                absolute
                right-[28px]
            `
        }
    }}
`

const StyleSelected = styled.div`
    ${tw`
        text-thin
        flex
        cursor-pointer
        items-center
    `}
`
const StyleModalSelect = styled(motion.div)`
    ${tw`
        absolute
        hidden
        uppercase
        bg-gray
        top-[30px]
        rounded-[5px]
        right-[10%]
        lg:bg-white
        lg:right-[5px]
    `}
    ${
        props => {
            if(props.$show){
                return tw`block`  
            }
        }
    }
    &::before {
        ${
            tw`
                absolute
                content
                right-[10px]
                top-[-5px]
                h-[15px]
                w-[15px]
                bg-gray
                z-[-1]
                lg:bg-white
            `
        }
        transform: rotate(45deg);
    }
`
const StyleItem = styled.div`
    ${tw`
        py-[5px]
        text-thin
        py-[10px]
        px-[17px]
        cursor-pointer
        font-bold
        lg:text-black
    `}
    ${
        props => {
            if(props.$selected){
                return tw`text-white lg:text-gray-500`
            }
        }
    }
`
const StyleName = tw.span`
    ml-[8px]
    mr-[12px]
`
export { StyleCountries, StyleSelected, StyleModalSelect, StyleItem, StyleName }
