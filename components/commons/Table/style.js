import tw from 'twin.macro'
import styled from 'styled-components'

const StyleTable = styled.table`
    ${tw`
        text-thin
        w-full
        table-auto
        rounded-[10px]
        overflow-hidden
    `}
    border-spacing: 0px 0px;
    border-collapse: collapse;
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`bg-[transparent] flex flex-col-reverse`
            default:
                return tw`bg-white`
        }
    }}
`
const StyleHeadingTable = styled.thead`
    ${tw`
            text-white
            sticky
            top-0
            bg-green
        `
    }

    ${
        props =>{
            if(props.$fixedHeading){
                return tw``
            }
        }
    }
`
const StyleContentTable = styled.tbody`
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`bg-[transparent]`
            default:
                return tw`bg-gray-bland`
        }
    }}
`
const StyleRowHeading = styled.tr`
    ${tw`
    `}
`
const StyleColHeading = styled.th`
    ${tw`
            text-left
            md:min-w-[50px]
        `
    }
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`py-[2px] px-[14px] font-normal capitalize`
            default:
                return tw`py-[20px] px-[10px] uppercase font-extra-bold`
        }
    }}

    ${props => {
        if (props.$width) {
            return `
                width: ${props.$width};
            `
        }
    }}
`
const StyleRowContent = styled.tr`
    ${
        tw`
            border-0
            border-b
            border-solid
            border-gray
        `
    }
    ${props => {
        switch (props.$mode) {
            case 'player':
                return tw`hover:bg-red`
            default:
                return tw`hover:bg-gray hover:cursor-pointer`
        }
    }}

`

const StyleCol = styled.td`
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
const StyleItemPinned = styled.div`
    ${tw`rounded-[50%] p-[7px] w-[40px] h-[40px] flex items-center justify-center mx-auto`}
    &:hover{
        ${tw`bg-gray-bland`}
    }
`
export {
    StyleTable, StyleHeadingTable,
    StyleContentTable, StyleRowHeading,
    StyleColHeading, StyleRowContent,
    StyleCol,
    StyleItemPinned
}