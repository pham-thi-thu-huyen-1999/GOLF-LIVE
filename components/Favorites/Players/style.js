import tw from 'twin.macro'
import styled from 'styled-components'

const StyleTourList = styled.div`
    ${tw``}
`
const StyleSearchTour = styled.div`
    ${tw`
            flex
            place-content-between
            mb-[60px]
            md:justify-end
            md:mb-[48px]
        `
    }
`
const StyleTableComp = styled.div`
    ${tw`
            lg:overflow-scroll
            w-full
        `
    }
    overflow-y: auto;

`

const StyleInfors = tw.div`
    mb-[20px]
`
const StyleNameDate = tw.div`
    flex
    justify-between
    items-center
`
const StyleFullName = styled.div``
const StyleDetails = tw.div`
    flex
    text-green
    text-normal
    mt-[8px]
    md:text-thin
`
const StyleItemDetail = tw.span`
    mr-[28px]
    md:mr-[12px]
`
const StyleStatus = tw.div`
    text-red
    text-normal
    md:text-thin
`
export {
    StyleTourList, StyleSearchTour,
    StyleTableComp, StyleInfors,
    StyleNameDate, StyleFullName,
    StyleDetails, StyleItemDetail,
    StyleStatus
}
