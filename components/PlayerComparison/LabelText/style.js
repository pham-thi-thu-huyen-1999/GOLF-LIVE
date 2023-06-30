import tw from 'twin.macro'
import styled from 'styled-components'

const StyleLabel = styled.div`
    ${tw`
        px-[40px]
        py-[9px]
        text-normal
        text-white
        bg-green
        rounded-[10px]
        uppercase
        mt-[11px]
    `}

`
const StyleLabelText = styled.div`
    ${tw`
        mb-[15px]
    `}
`
export { StyleLabel, StyleLabelText }