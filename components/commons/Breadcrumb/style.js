import tw from 'twin.macro'
import styled from 'styled-components'

const StyleBreadcrumb = styled.ul`
    ${tw`
            flex
            pl-0
            m-0
        `
    }
    
`
const StyleItemBread = styled.li`
    ${tw`
            text-black
            opacity-[0.5]
            flex
            items-center
        `
    }
    &+li:before {
        ${tw`
                px-[8px]
                text-black
            `
        }
        content: "|";
    }
`

export { StyleBreadcrumb, StyleItemBread }