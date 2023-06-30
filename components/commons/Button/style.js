import tw from 'twin.macro'
import styled from 'styled-components'

const StyleButton = styled.a`
    ${tw`
        uppercase
        py-[10px]
        font-extra-bold
        flex
        justify-center
        items-center
    `}
    ${props => {
        if (props.$disabled) {
            return tw`pointer-events-none`
        }
    }}
    &.submit {
        ${props => {
        const submitDefault = "text-white text-normal rounded-[15px] lg:text-thin"
        let result = submitDefault
        if (props.theme) {
            switch (props.theme.bg) {
                case 'green':
                    result = tw`${submitDefault} bg-green`
                    break;
                case 'black':
                    result = tw`${submitDefault} bg-black`
                    break;
                case 'blue':
                    result = tw`${submitDefault} bg-blue`
                    break;
                default:
                    result = tw`${submitDefault} bg-red`
                    break;
            }
        }
        if (props.$disabled) {
            result = {...result, background: `#ccc !important;`}
        }

        return result
    }}
    }
    &.gradiant {
        ${tw`
            rounded-[5px]
            bg-white
            text-red
            border
            border-solid
            border-red
            text-light
        `}
    }
    &.link {
        ${tw`
            text-light
            text-red
            font-normal
            underline
            italic
            p-0
            lg:text-thin
        `}
        ${props => {
        if (props.$color) {
            switch (props.$color) {
                case "white":
                    return tw`text-white`
                default:
                    break;
            }
        }
    }}
    }
    &.small {
        ${tw`px-[13px] lg:px-[5px] lg:py-[5px]`}
    }
    &.large {
        ${tw`
            px-[60px]
            `
    }
    }
    &.login{
        ${tw`
            text-white
            lg:text-thin
            lg:py-[6px]
            rounded-[15px]
            lg:rounded-[10px]
            transition-all
            hover:bg-[#dd1919]
        `}
    }
`
const StyleIcon = tw.span`
    mr-[5px]
    w-[24px]
    h-[24px]
    lg:w-[12px]
    lg:h-[12px]
`

const StyleText = styled.span``
export { StyleButton, StyleIcon, StyleText }
