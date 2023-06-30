import { StyleColHeading, StyleItemPinned } from "@Component/commons/Table/style";

const RowHeading = ({ itemRow, columns, mode }) => {
    let unique = Date.now();

    return <>
        {columns?.length && columns.map((col, index) => {
            return <StyleColHeading key={`col-${unique}-${index}`} $mode={mode}>
                {itemRow[col]}
            </StyleColHeading>
        })}
    </>
}

export default RowHeading
