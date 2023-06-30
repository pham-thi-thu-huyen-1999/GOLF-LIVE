import {
    StylePar,
    StyleItemNumber
} from "./style";

const RenderNumber = ({ number }) => {
    const listKey = Object.keys(number)
    let unique = Date.now()
    return <StylePar>
        {listKey.map((item, index) => {
            const newNumber = number[item].split('_')[0]
            const background = number[item].split('_')[1]
            return <StyleItemNumber $backGround={background} key={`number-item-${index}-${unique}`}>
            {newNumber}
            </StyleItemNumber>
        })}
    </StylePar>
}

export default RenderNumber
