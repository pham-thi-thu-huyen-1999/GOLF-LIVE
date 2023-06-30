import {
    StylePar,
    StyleItemNumber
} from "./style";

const ParComponent = ({ number }) => {
    const listKey = Object.keys(number)
    let unique = Date.now()
    return <StylePar>
        {listKey.map((item, index) => {
            return <StyleItemNumber key={`number-item-${index}-${unique}`}>
            {number[item]}
            </StyleItemNumber>
        })}
    </StylePar>
}

export default ParComponent
