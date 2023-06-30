import tw from 'twin.macro'
import styled from 'styled-components'

const StyleToursDetail = styled.section`
    ${tw`
            pt-[80px]
            pb-[80px]
            lg:pb-[60px]
            lg:pt-0
        `
    }
`;
const StyleDate = tw.div`
    text-red text-[24px] font-bold uppercase
`
const StyleSort = tw.div`flex justify-between my-[32px] lg:my-[12px]`
const StylePlayersBySlug = styled.div`
    ${tw`
        mb-[48px] lg:mb-[24px]
    `}
    &:last-child {
        ${tw`mb-0`}
    }
`
export { StyleToursDetail, StyleDate, StyleSort, StylePlayersBySlug }