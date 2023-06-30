import { SEXS } from "utils/constants";
import { StyleItem, StyleOptionSex } from "./style";

const FilterBySex = ({ sexSelected, hanleFilterSex, trans }) => {
  return (
    <StyleOptionSex>
      {Object.keys(SEXS).map((name, index) => (
        <StyleItem
          key={`${SEXS}-${index}`}
          $mode={sexSelected === index}
          onClick={() => {
            hanleFilterSex(index);
          }}
        >
         {trans(`common:button.${name}`)}
        </StyleItem>
      ))}
    </StyleOptionSex>
  );
};
export default FilterBySex;
