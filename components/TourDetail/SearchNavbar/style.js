import tw from 'twin.macro'
import styled from 'styled-components'

const StyleSearchNavbar = styled.ul`
    ${tw`
            flex
            items-center
            pl-0
            space-x-[40px]
            m-0
        `
    }
    
`
const StyleItemNav = styled.li`
    ${tw`
            cursor-pointer
            flex
            items-center
            uppercase
            pb-[12px]

        `
    }
    ${
        props => {
            if(props.$active){
                return tw`
                    border-0
                    border-b-[2px]
                    border-green
                    border-solid
                    font-extra-bold
                `
            }
        }
    }
`

export { StyleSearchNavbar, StyleItemNav }