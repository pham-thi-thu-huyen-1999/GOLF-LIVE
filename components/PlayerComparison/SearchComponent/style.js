import tw from 'twin.macro'
import styled from 'styled-components'

const StyleModalSelect = styled.div`
    ${tw`
        absolute
        top-[75px]
        bg-white
        hidden
        z-2
        rounded-[5px]
        border-green
        border-[1px]
        border-solid
    `}
    ${props => {
        if (props.$show) {
            return tw`block`
        }
    }
    }
`
const StyleSearchComp = styled.div`
    ${tw`
            relative
            h-full
            w-full
            md:max-w-[271px]
        `
    }
`
const StyleOptionItem = styled.option`
    ${tw`
            p-[10px]
            cursor-pointer
        `
    }
    &:hover{
        ${tw`
                bg-gray
            `
    }
    }
`
const StyleInput = styled.input`
    ${tw`
            h-full
            w-full
            border-0
            border-black
            border-b-[1px]
            border-solid
            pb-[20px]
            md:py-[23px]
        `
    }
    &:focus-visible {
        ${tw`
                border-none
                outline-none
                border-0
                border-black
                border-b-[1px]
                border-solid
            `
    }
    }
`
const StyleIconSearch = styled.div`
    ${tw`
            absolute
            right-0
            top-1/2
        `
    }
    transform: translateY(-50%);
`

const styleSelect = tw`border-0 border-b border-solid
    border-green text-medium font-extra-bold uppercase rounded-none outline-none
    hover:border-0 hover:border-b
    hover:border-solid
    hover:border-green
  `

const styleValueContainer = tw`py-[11px] px-0 w-full`
export { StyleSearchComp, StyleOptionItem, StyleInput, StyleModalSelect, StyleIconSearch, styleSelect, styleValueContainer }