import {
  StyleTable, StyleContentTable, StyleRowContent
} from "./style";
import HeadingTable from "@Component/commons/Table/HeadingTable";
import RowHeading from "@Component/commons/Table/RowHeading";
import { useState } from "react";

const Table = ({ list, mode, onClickItem = (itemRow) => { } }) => {
  let unique = Date.now()
  const rowsHeading = list && list?.length ? Object.keys(list[0]) : Object.keys(list)
  const onClickItemTable = (event, itemRow) => {
    let pinned = event.target.classList.contains("start")
    if (!pinned) {
      onClickItem(itemRow)
    }
    event.preventDefault()
  }

  return <StyleTable $mode={mode}>
    <HeadingTable rowsHeading={rowsHeading} mode={mode} />
    <StyleContentTable $mode={mode}>
      {list?.length ?
        list.map((itemRow, index) => {
          return <StyleRowContent key={`row-${index}-${unique}-${itemRow}`}
            onClick={(e) => onClickItemTable(e, itemRow)} $mode={mode}>
            <RowHeading itemRow={itemRow} columns={rowsHeading} mode={mode}
             />
          </StyleRowContent>
        }) : <StyleRowContent>
          <RowHeading itemRow={list} columns={rowsHeading} mode={mode} />
        </StyleRowContent>
      }
    </StyleContentTable>
  </StyleTable>
}
export default Table
