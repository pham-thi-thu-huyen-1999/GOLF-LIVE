import { StyleTourList, StyleTableComp } from "./style";
import { setOverflowModalState, useGlobalState } from "@Dto/states";
import { Get } from "@Dto/Api";
import tourPlayerByTourAndPlayerName from "graphQL/findPlayerByTourAndPlayerName";
import ModalPlayer from "@Component/global/modalPlayer";
import { useState } from "react";
import ModalLoading from "@Component/commons/ModalLoading";
import TableChecked from "@Component/commons/TableChecked";
import Infors from "./Infors";
import usePreventScrolling from "store/usePreventScrolling";

const Players = ({ list = [], slugName, onChangeLocalStorage, infors }) => {
  const [loading, setLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState(null);

  const [active] = useGlobalState('modal')
  usePreventScrolling({ active })
  const handlPlayerDetail = async (player) => {
    setLoading(true)
    if (player?.player) {
      setLoading(true)
      let mutatePlayer = player?.player.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '_')
      const query = {
        title: slugName,
        player: mutatePlayer
      }
      const { data } = await Get({ query: tourPlayerByTourAndPlayerName(query) })
      if (data.findPlayerByTourAndPlayerName) {
        setDataDetail(data.findPlayerByTourAndPlayerName)
        setOverflowModalState(true)
        setLoading(false)
      } else {
        setLoading(true)
      }
    }
  }

  const onCheckFavorite = (checked, item) => {
    let newList = []
    if (!checked) {
      newList = list.filter(itemCheck => renderNamePlayer(itemCheck.player) !== renderNamePlayer(item.player))
    }
    onChangeLocalStorage(newList)
  }
  const renderNamePlayer = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-')
  }
  return <>
    {list?.length && <>
      <Infors infor={infors} />
      <StyleTourList>
        <StyleTableComp>
          {list?.length
            ? <TableChecked list={list} onClickItem={handlPlayerDetail} itemsFavorites={list} onCheckFavorite={onCheckFavorite} /> : ''}
        </StyleTableComp>
      </StyleTourList>
      {loading ? <ModalLoading active={true} onClose={() => { setLoading(false), setDataDetail(null) }} /> :
        <>{dataDetail && <ModalPlayer data={dataDetail}
          onCloseModal={() => { setDataDetail(null),  setOverflowModalState(false)}} />}</>}
    </>}
  </>
}
export default Players
