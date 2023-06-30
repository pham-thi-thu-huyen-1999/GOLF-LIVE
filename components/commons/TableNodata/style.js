import tw from 'twin.macro'
import styled from 'styled-components'

const StyleNodata = styled.div`
    ${tw`h-[100vh] text-bold opacity-[0.5] font-bold text-center`}
`
const StyleContentNodata = tw.div`
    flex justify-center items-center h-[100vh]
`
export { StyleNodata, StyleContentNodata }
