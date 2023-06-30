import tw from 'twin.macro'
import styled from 'styled-components'

const StyleOptionSex = styled.div`
    ${tw`
            flex
            space-x-[12px]
            md:flex-wrap
            md:mt-[40px]
            md:justify-center
        `
    }
`
const StyleItem = styled.span`
    ${
        tw`
            bg-gray
            p-[10px]
            rounded-[5px]
            text-white
            font-extra-bold
            uppercase
            text-light
            cursor-pointer
        `
    }
    ${props => {
        if(props.$mode){
            return tw`bg-green`
        }
    }}
`
export {
    StyleOptionSex,
    StyleItem
}