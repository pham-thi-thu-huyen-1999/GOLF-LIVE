import {
  StyleTable, StyleContentTable, StyleRowContent
} from "./style";
import HeadingTable from "./HeadingTable";
import RowHeading from "./RowHeading";
import { useState } from "react";

const TableChecked = ({ list, mode, onClickItem = (itemRow) => { },
  onCheckFavorite = () => { }, itemsFavorites }) => {
  let unique = Date.now()
  const rowsHeading = list && list?.length ? Object.keys(list[0]) : Object.keys(list)
  const onClickItemTable = (event, itemRow) => {
    let pinned = event.target.classList.contains("start")
    if (!pinned) {
      onClickItem(itemRow)
    }
    event.preventDefault()
  }
  const renderNamePlayer = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
  }
  const checkedItem = (item) => {
    let checkFav = itemsFavorites.findIndex(fav => {
      return item.player === fav.player
    })
    return checkFav !== -1
  }
  return <StyleTable $mode={mode}>
    <HeadingTable rowsHeading={rowsHeading} mode={mode} />
    <StyleContentTable $mode={mode}>
      {list?.length ?
        list.map((itemRow, index) => {
          return <StyleRowContent key={`row-${index}-${unique}-${itemRow}`}
            onClick={(e) => onClickItemTable(e, itemRow)} $mode={mode}>
            <RowHeading itemRow={itemRow} columns={rowsHeading} mode={mode}
              onCheckFavorite={onCheckFavorite} isChecked={checkedItem(itemRow)} />
          </StyleRowContent>
        }) : <StyleRowContent>
          <RowHeading itemRow={list} columns={rowsHeading} mode={mode} />
        </StyleRowContent>
      }
    </StyleContentTable>
  </StyleTable>
}
export default TableChecked
