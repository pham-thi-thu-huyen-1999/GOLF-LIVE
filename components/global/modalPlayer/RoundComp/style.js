import tw from 'twin.macro'
import styled from 'styled-components'

const StyleRounds = tw.div`
    pt-[5px]
`;
const StyleRoundItem = tw.div`
    pb-[5px]
`
const StyleHeadingRound = tw.div`
    bg-green
    p-[15px]
    rounded-[10px]
`
const StylePar = tw.div`
    flex
    py-[5px]
`
const StyleItemNumber = styled.div`
    ${tw`
            px-[10px]
            py-[5px]
            font-bold
            rounded-[3px]
            mr-[5px]
            text-thin
        `
    }
    ${props => {
        if (props.$backGround) {
            switch (props.$backGround) {
                case "doubleEagle":
                    return tw`bg-[#91BD12] text-white`
                case "eagle":
                    return tw`bg-[#AEE217] text-white`
                case "birdieBg":
                    return tw`bg-[#DEE217] text-white`
                case "parBg":
                    return tw`bg-[#D9D9D9]`
                case "bogeyBg":
                    return tw`bg-[#E2A917] text-white`
                case "doubleEagle":
                    return tw`bg-[#E25417] text-white`
                case "bogey3+Bg":
                    return tw`bg-[#FF2243] text-white`
                default:
                    break;
            }
            return `bacground-color: ;`
        }
    }
    }
`
const StylePars = tw.div`
    flex
    place-content-end
    items-center
    pt-[10px]
`
const StyleHole = tw.div`
    flex
    text-green
    items-center
    font-normal
    border-0
    border-b
    border-solid
    border-green
    place-content-between
    pt-[5px]
`

const StyleTee = tw.div`
    flex
    items-center
    place-content-between
`
export { StyleRounds, StyleRoundItem, StyleHeadingRound, StylePar, StyleItemNumber, StyleHole, StylePars, StyleTee }