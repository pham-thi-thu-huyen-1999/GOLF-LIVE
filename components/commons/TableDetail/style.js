import tw from 'twin.macro'
import styled from 'styled-components'

const StyleTableDetail = styled.div`
    ${tw`
        text-thin
        w-full
        rounded-[10px]
        overflow-hidden
    `}
    border-spacing: 0px 0px;
    border-collapse: collapse;
`

const StyleRowHeading = styled.div`
    ${tw`
        grid
        text-white
        grid-cols-6
        font-normal 
        capitalize
    `}
`
const StyleRowContent = styled.div`
    ${
        tw`
            grid
            text-white
            grid-cols-6
            text-medium
            font-extra-bold
            uppercase
            pb-[4px]
        `
    }
`
const StyleColHeading = styled.div`
    ${tw`
            text-center
            text-white
            text-medium
            font-extra-bold
            md:min-w-[50px]
            px-[14px] 
            lg:px-[18px] 
            whitespace-nowrap
            uppercase
        `
    }
`

const StyleCol = styled.div`
    ${tw`
        p-[5px]
    `}
    ${props => {
        if (props.$width) {
            return `
                width: ${props.$width};
            `
        }
    }}
`
const StyleItemStatic = tw.div`
    flex
    flex-col
    space-y-[4px]
    lg:pb-12px
`
const StyleContentTableDetail = styled.div`
    ${tw`bg-green flex flex-nowrap lg:flex-wrap lg:justify-center`}
`
const StyleColContent = tw.div`
    text-center
    text-white
    text-thin
    md:min-w-[50px]
    px-[14px]
    lg:px-[18px]
    whitespace-nowrap
    capitalize
`
export {
    StyleTableDetail,
    StyleContentTableDetail, StyleRowHeading,
    StyleColHeading, StyleRowContent,
    StyleCol, StyleItemStatic, StyleColContent
}