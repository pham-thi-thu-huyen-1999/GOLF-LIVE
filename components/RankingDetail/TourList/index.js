import { StyleTourList, StyleTableComp } from "./style";
import Table from "@Component/commons/Table";
import { setOverflowModalState } from "@Dto/states";
import { Get } from "@Dto/Api";
import tourPlayerByTourAndPlayerName from "graphQL/findPlayerByTourAndPlayerName";
import ModalPlayer from "@Component/global/modalPlayer";
import rankingManPlayerByName from "graphQL/findManPlayerByName";
import rankingWomenPlayerByName from "graphQL/findWomenPlayerByName";
import ModalLoading from "@Component/commons/ModalLoading";
import React, { useState } from "react";

const TourList = ({ list = [], slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState(null)
  const checkWomen = slug.includes("women");

  const handlPlayerDetail = async (player) => {
    setLoading(true)
    if (player?.name) {
      setLoading(true)
      let mutatePlayer = player?.name.replace(/(\w+)\s(\w+)/, "$2 $1")
      const query = {
        name: mutatePlayer
      }
      const { data } = await Get({ query: checkWomen ? rankingWomenPlayerByName(mutatePlayer) : rankingManPlayerByName(mutatePlayer) })
      if (data) {
        if (data.findWomenPlayerByName) {
          setDataDetail(data.findWomenPlayerByName)
        } else {
          setDataDetail(data.findManPlayerByName)
        }
        setOverflowModalState(true)
        setLoading(false)
      } else {
        setLoading(true)
      }
    }
  }
  return <>
    <StyleTourList>
      <StyleTableComp>
        {list?.length>0 ?
            <Table list={list} onClickItem={handlPlayerDetail} /> : ""}
      </StyleTableComp>
    </StyleTourList>
    {!loading ?
      <ModalPlayer data={dataDetail} checkWomen={checkWomen}/> :
      <ModalLoading active={true} onClose={() => setLoading(false)} />}
  </>
}
export default TourList
