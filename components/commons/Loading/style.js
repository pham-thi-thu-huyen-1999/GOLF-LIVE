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
    &.submit {
        ${props => {
            const submitDefault = "text-white text-normal rounded-[15px]"
            switch (props.theme.bg) {
                case 'green':
                    return tw`${submitDefault} bg-green`
                default:
                    return tw`${submitDefault} bg-red`
            }
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
    }
    &.small {
        ${tw`px-[13px]`}
    }
    &.large {
        ${tw`
            px-[60px]
            `
        }
    }
    &.login{
        ${tw`
            bg-red
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
