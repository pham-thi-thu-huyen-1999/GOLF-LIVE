import { StyleFilterComponent, StyleItemFilter } from "./style";
import FilterItem from "../FilterItem";
import SearchComponent from "../SearchComponent";
import { useMemo } from "react";

const MAX_PLAYER_FILTER = 3;

const PlayersFilterComponent = ({
  sexSelected,
  playersFiltered,
  handleSetPlayersFiltered,
  handleRemovePlayersFiltered,
  trans
}) => {
  const players = useMemo(
    () => playersFiltered[sexSelected],
    [playersFiltered, sexSelected]
  );

  return (
    <StyleFilterComponent>
      {!!players.length &&
        players.map((item, index) => {
          return (
            <StyleItemFilter key={`filter-${index}`}>
              <FilterItem
                name={item.player_name}
                onDeleteItem={() => handleRemovePlayersFiltered(item)}
              />
            </StyleItemFilter>
          );
        })}

      {players.length <=MAX_PLAYER_FILTER && (
        <StyleItemFilter>
          <SearchComponent sexSelected={sexSelected} onPlayerSelected={handleSetPlayersFiltered} trans={trans}/>
        </StyleItemFilter>
      )}
    </StyleFilterComponent>
  );
};
export default PlayersFilterComponent;
