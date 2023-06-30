import tw from 'twin.macro'
import styled from 'styled-components'

const StyleFilterComponent = styled.div`
    ${tw`
            mt-[61px]
            flex
            space-x-[36px]
            md:space-x-0
            md:flex-wrap
            md:mt-[40px]
            md:flex-col
            md:justify-center
            md:content-center
        `
    }
`
const StyleItemFilter = styled.div`
    flex-basis: 25%;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
    ${
        tw`
            md:flex
            md:justify-center
            md:py-[20px]
            md:w-[80%]
        `
    }
    .css-b62m3t-container{
        ${tw`w-full`}
    }
`
export {
    StyleFilterComponent, StyleItemFilter
}