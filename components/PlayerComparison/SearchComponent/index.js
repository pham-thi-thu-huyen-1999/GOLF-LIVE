import { styleSelect, styleValueContainer } from "./style";
import AsyncSelect from "react-select/async";
import { fieldQuery, SEXS } from "utils/constants";
import { findManPlayerByName, findWomenPlayerByName } from "graphQL/players";
import { Get } from "@Dto/Api";
import { useCallback } from "react";
import React, { useId } from 'react';

function debounce(fn, delay = 250) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const SearchComponent = ({ sexSelected, onPlayerSelected, trans }) => {
  const formatOptions = useCallback(
    (options) =>
      options.map((option) => ({
        value: option._id,
        label: option.player_name,
        ...option,
      })),
    []
  );

  const _loadOptions = useCallback(
    async (inputValue) => {
      const field = fieldQuery[sexSelected];
      const newQuery =
        sexSelected === SEXS.male
          ? findManPlayerByName(inputValue)
          : findWomenPlayerByName(inputValue);

      const { data } = await Get({ query: newQuery });
      return formatOptions(data[field]);
    },
    [sexSelected]
  );

  const loadOption = useCallback(
    debounce(async (inputValue, callback) => {
      const data = await _loadOptions(inputValue)
      callback(data);
    }, 500),
    [_loadOptions]
  );
  return (
    <>
      <AsyncSelect
        value={null}
        instanceId={useId()}
        loadOptions={loadOption}
        onChange={(item) => onPlayerSelected(item)}
        placeholder={trans(`home:comparisonPlayer.search`)}
        styles={{
          singleValue: (base) => ({ ...base }),
          valueContainer: (base) => ({
            ...base,
            ...styleValueContainer,
          }),
          control: (css) => ({
            ...css,
            ...styleSelect,
          }),
        }}
      />
    </>
  );
};
export default SearchComponent;
