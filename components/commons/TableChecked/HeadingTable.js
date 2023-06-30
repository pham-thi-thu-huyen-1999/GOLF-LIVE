import { StyleHeadingTable, StyleRowHeading } from "@Component/commons/Table/style";
import HeadingItem from "@Component/commons/Table/HeadingItem";

const HeadingTable = ({ rowsHeading, mode }) => {
    let unique = Date.now();
  
    return <StyleHeadingTable>
        <StyleRowHeading>
            <th></th>
            {rowsHeading?.length && rowsHeading.map((item, index) => {
                return <HeadingItem key={`table-heading-${unique}-${index}`}
                    item={item}
                    mode={mode} />
            })}
        </StyleRowHeading>
    </StyleHeadingTable>
}

export default HeadingTable
