import {StyleRowHeading} from "@Component/commons/TableDetail/style";
import HeadingItem from "@Component/commons/TableDetail/HeadingItem";

const HeadingTableDetail = ({rowsHeading}) => {

    let unique = Date.now()

    return <>
        <StyleRowHeading>
            {rowsHeading?.length && rowsHeading.map((item, index) => {
                return  <HeadingItem key={`TableDetail-heading-${unique}-${index}`} item={item.replace("_", " ")}/>
            })}
        </StyleRowHeading>
    </>
}

export default HeadingTableDetail
