import { StyleTourList, StyleTableComp } from "./style";
import Table from "@Component/commons/Table";
import { setOverflowModalState } from "@Dto/states";
import { Get } from "@Dto/Api";
import tourPlayerByTourAndPlayerName from "graphQL/findPlayerByTourAndPlayerName";
import ModalPlayer from "@Component/global/modalPlayer";
import { useCallback, useEffect, useState } from "react";
import ModalLoading from "@Component/commons/ModalLoading";
import TableChecked from "@Component/commons/TableChecked";

const TourList = ({ list = [], itemFavs, slug, isCurrent, onChangeLocalStorage }) => {
  const [loading, setLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState(null);
  const handlPlayerDetail = async (player) => {
    setLoading(true)
    if (player?.player) {
      let mutatePlayer = player?.player.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '_')
      const query = {
        title: slug,
        player: mutatePlayer
      }
      const initialPlayer = await Get({ query: tourPlayerByTourAndPlayerName(query) })
      if (initialPlayer.data.findPlayerByTourAndPlayerName) {
        setOverflowModalState(true)
        setLoading(false)
      } else {
        setLoading(true)
      }
      setDataDetail(initialPlayer.data.findPlayerByTourAndPlayerName)
    }
  }
  /**
   * push item to array of slug
   * @param {*} checked
   * @param {*} item
   */

  const onCheckFavorite = (checked, item) => {
    let newList = [...itemFavs]
    if (checked) {
      newList = [...itemFavs, item]
    } else {
      newList = newList.filter(itemCheck => renderNamePlayer(itemCheck.player) !== renderNamePlayer(item.player))
    }
    onChangeLocalStorage(newList)
    // push to local
  }
  const renderNamePlayer = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
  }
  return <>
    <StyleTourList>
      <StyleTableComp>
        {isCurrent ? <> {list?.length > 0
          ? <TableChecked list={list} onClickItem={handlPlayerDetail} itemsFavorites={itemFavs}
            onCheckFavorite={onCheckFavorite} /> : ''}</> : <Table
          list={list} onClickItem={handlPlayerDetail}
        />}
      </StyleTableComp>
    </StyleTourList>
    {!loading ?
      <ModalPlayer data={dataDetail} /> :
      <ModalLoading active={true} onClose={() => setLoading(false)} />}
  </>
}
export default TourList
