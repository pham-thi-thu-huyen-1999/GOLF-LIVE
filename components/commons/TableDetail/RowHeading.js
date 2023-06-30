import { StyleColHeading } from "@Component/commons/TableDetail/style";

const RowHeading = ({ itemRow, columns }) => {
    let unique = Date.now()
    return <>
        {columns?.length && columns.map((col, index) => {
            return <StyleColHeading key={`col-${unique}-${index}`}>
                {itemRow[col]}
            </StyleColHeading>
        })}
    </>
}

export default RowHeading
