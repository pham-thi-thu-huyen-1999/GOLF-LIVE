import tw from 'twin.macro'
import styled from 'styled-components'

const StylePlayCard =  tw.div`
// overflow-x-scroll

`;
const TitleTablePlayerScroll =  tw.div`
    lg:overflow-x-scroll
    w-full

`;
const TitleTablePlayerContent =  tw.div`
        sm:max-w-[816px]
        sm:w-[816px]
`;

const StyleListColor = tw.div`
    flex
    gap-[18px]
    pt-[24px]
    pb-[50px]
`

const StyleItemColor = tw.div`
    flex
    items-center
`
const StyleColor = styled.div`
   ${
    tw`
        p-[14px]
        rounded-[3px]
        mr-[8px]
    `
   }
   ${
    props => {
        if(props.$color){
            return `background: ${props.$color}`
        }
    }
   }
`
export {StylePlayCard,TitleTablePlayerContent,TitleTablePlayerScroll, StyleListColor, StyleItemColor, StyleColor}
