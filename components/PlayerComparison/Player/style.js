import tw from 'twin.macro'
import styled from 'styled-components'

const StylePlayerComponent = styled.div`
    flex-basis:  33.33%;
    ${tw`
        rounded-full
        text-center
        flex
        flex-col
        justify-center
        max-w-[250px]
    `}
`

const StyleAvt = styled.div`
    ${tw`
            relative
            rounded-full
            w-[187px]
            h-[187px]
            bg-[rgba(152,193,34,0.5)]
            m-auto
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
            h-full
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
const StyleTitlePlayer = styled.div`
    ${tw`
        mt-[23px]
        mb-[31px]
    `}
`
export { StylePlayerComponent, StyleAvt, StyleTitlePlayer }