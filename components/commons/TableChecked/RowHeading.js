import { StyleColHeading, StyleItemPinned } from "@Component/commons/Table/style";
import { useEffect, useState } from "react";
import { Start } from "../Icon";

const RowHeading = ({ itemRow, columns, mode, isChecked, onCheckFavorite = () => { } }) => {
    let unique = Date.now();
    const [checked, setChecked] = useState(isChecked)
    const onSetChecked = () => {
        setChecked(!checked)
        onCheckFavorite(!checked, itemRow)
    }

    return <>
        <th onClick={onSetChecked} className="start">
            <StyleItemPinned  className="start">
                <Start stroke={isChecked ? "#FFE600" : "#A5A5A5"} fill={isChecked ? "#FFE600" : "#fff"} /></StyleItemPinned>
        </th>
        {columns?.length && columns.map((col, index) => {
            return <StyleColHeading key={`col-${unique}-${index}`} $mode={mode}>
                {itemRow[col]}
            </StyleColHeading>
        })}
    </>
}

export default RowHeading
