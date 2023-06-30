import {
  StyleTableDetail, StyleContentTableDetail, StyleColHeading,
  StyleItemStatic
} from "./style";
import HeadingItem from "./HeadingItem";

const TableDetail = ({ list }) => {

  let unique = Date.now()
  const keysData = Object.keys(list)
  return <StyleTableDetail>
    <StyleContentTableDetail>
      {keysData.map((item, index) => {
        return <StyleItemStatic key={`col-${unique}-${index}`}>
          <StyleColHeading>
            {list[item]}
          </StyleColHeading>
          <HeadingItem item={item}/>
        </StyleItemStatic>
      })}
    </StyleContentTableDetail>
  </StyleTableDetail>
}
export default TableDetail
