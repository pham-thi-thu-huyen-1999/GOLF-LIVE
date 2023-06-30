import TitlePlayer from "../TitlePlayer";
import { StyleFilterItem, StyleClose, StyleContentFilter } from "./style";
import { StyleDescription } from "../style"
import { Close } from "@Component/commons/Icon";

const FilterItem = ({ level = "", name = "", onDeleteItem }) => {
  return <StyleFilterItem>
    <StyleClose onClick={onDeleteItem}>
      <Close stroke="black" width="16" height="16" />
    </StyleClose>
    <StyleContentFilter>
      <TitlePlayer name={name}/>
      <StyleDescription>
        {level}
      </StyleDescription>
    </StyleContentFilter>
  </StyleFilterItem>
}
export default FilterItem
