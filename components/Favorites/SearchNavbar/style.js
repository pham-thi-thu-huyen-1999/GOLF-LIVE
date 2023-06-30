import tw from 'twin.macro'
import styled from 'styled-components'

const StyleSearchNavbar = styled.ul`
    ${tw`
            flex
            items-center
            pl-0
            gap-x-[20px]
            m-0
            border-0
            border-b-[1px]
            border-[#D9D9D9]
            border-solid
        `
    }
    
`
const StyleItemNav = styled.li`
    ${tw`
            px-[20px]
            cursor-pointer
            flex
            items-center
            uppercase
            py-[12px]
            text-gray
            font-bold
        `
    }
    ${
        props => {
            if(props.$active){
                return tw`
                    bg-red
                    text-white
                    rounded-t-[10px]
                    // border-0
                    // border-b-[2px]
                    // border-green
                    // border-solid
                `
            }
        }
    }
`

export { StyleSearchNavbar, StyleItemNav }