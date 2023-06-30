import tw from 'twin.macro'
import styled from 'styled-components'

const StyleCards = styled.div`
    ${
        tw`
            flex
            gap-[74px]
            lg:overflow-x-scroll
            // max-w-[764px]
            pt-[33px]
            lg:gap-[33px]
        `
    }
`

export { StyleCards }