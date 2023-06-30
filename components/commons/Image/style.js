import tw from 'twin.macro'
import styled from 'styled-components'

const StyleImageComponent = styled.div`
    ${tw`
        relative
    `}
    ${
        props => {
            return `
                height: ${props.$height};
                width: ${props.$width};`
            
        }
    }
`
export { StyleImageComponent }