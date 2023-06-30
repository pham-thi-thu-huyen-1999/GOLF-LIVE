import tw from 'twin.macro'
import styled from 'styled-components'
import { checkStaging } from 'utils/checkStaging'

const StylePlayerComparisonComp = styled.section`
    ${
        tw`
            pt-[60px]
            pb-[80px]
            lg:pb-[60px]
        `
    }
`
const StyleDescription = styled.div`
    ${tw`
        text-normal
        sm:text-thin
    `}
`

const StyleButtonCompare = styled.div`
    ${tw`
        ml-auto
        max-w-[166px]
        mt-[18px]
        lg:mx-auto
    `}
`
const StyleHeadingComparison = styled.div`
    ${
        tw`
            mb-[8px]
            relative
            z-1
        `
    }
    h1{
        ${
            tw`
                max-w-[495px]
                md:max-w-[233px]
            `
        }
    }
    &:before {
        ${
            tw`
                content
                absolute
                h-full
                w-full
                right-0
                top-2/4
                bg-contain
                bg-no-repeat
                max-w-[683px]
                md:max-w-[70%]
                z-[-1]
            `
        }
        transform: translateY(-50%);
        background-image: url('./images/players/comparison.png')
    }
`
const StyleDesFilterSex = tw.div`
    flex
    place-content-between
    md:flex-col
`
export { StylePlayerComparisonComp, StyleDescription, StyleButtonCompare, StyleHeadingComparison, StyleDesFilterSex }