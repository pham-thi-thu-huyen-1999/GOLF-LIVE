import tw from 'twin.macro'
import styled from 'styled-components'

const StyleMasthead = styled.div`
    ${tw`
            flex
            mb-[12px]
            items-center
            pl-0
            gap-x-[61px]
            md:mb-[12px]
            md:flex-wrap
            sm:gap-x-0
        `
    }
 
`
const StyleTitle = styled.div`
    ${tw`
        w-full
        max-w-[470px]
        relative
    `}
    &::before{
        background: url("/images/detail/ball.png");
        ${tw`
            content
            bg-center
            absolute
            w-[127px]
            h-full
            right-0
            bg-no-repeat
            top-0
            bg-contain
            z-[-1]
            opacity-[0.5]
        `
    }
    }
`
const StyleSubTitle = styled.div`
    ${tw`
        text-normal
        mb-[12px]
    `}
`

const StyleImagelogo = tw.div`
    mr-[61px]
`
export { StyleMasthead, StyleSubTitle, StyleTitle, StyleImagelogo }