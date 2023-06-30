import tw from 'twin.macro'
import styled from 'styled-components'

const ScrollBar = styled.div`
    ${tw`
        max-h-[100px]
        overflow-y-auto
        pr-[12px]
    `}
    ${
        props => {
            if(props.$max){
                return `
                    max-height: ${props.$max};
                `
            }
        }
    }
    &::-webkit-scrollbar {
        ${
        tw`
            w-[2px]
            bg-gray
        `
        }
    }
    &::-webkit-scrollbar-thumb {
        ${
        tw`
            bg-green
            border-[2px] border-solid border-green
        `
        }
    }
`
export { ScrollBar }