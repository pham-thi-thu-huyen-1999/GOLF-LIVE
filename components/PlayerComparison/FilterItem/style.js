import tw from 'twin.macro'
import styled from 'styled-components'

const StyleFilterComponent = styled.div`
`
const StyleFilterItem = styled.div`
    ${tw`
        relative
        w-full
    `}
    
`
const StyleClose = styled.div`
    ${tw`
        absolute
        right-0
        cursor-pointer
    `}
`
const StyleContentFilter = styled.div`
    ${tw`
        py-[10px]
        pr-[10px]
        border-0
        border-green
        border-b-[1px]
        border-solid
    `}
`
export { StyleFilterComponent, StyleFilterItem, StyleClose, StyleContentFilter }