import Button from "@Component/commons/Button";
import Heading from "@Component/commons/Heading";
import { Container, ContainerChildren } from "@Styles/container";
import { useCallback, useState } from "react";
import { SEXS } from "utils/constants";
import FilterBySex from "./FilterBySex";
import PlayersFilterComponent from "./PlayerFilterComponent";
import PlayersComponent from "./PlayersComponent";
import {
  StylePlayerComparisonComp,
  StyleDescription,
  StyleButtonCompare,
  StyleHeadingComparison,
  StyleDesFilterSex,
} from "./style";

const PlayerComparison = ({ data, trans }) => {
  const { title, subTitle } = data;
  const [sexSelected, setselected] = useState(SEXS.male);
  const [players, setPlayers] = useState({
    0: [],
    1: [],
  });

  const [playersFiltered, setPlayersFiltered] = useState({
    0: [],
    1: [],
  });

  const uniquePlayers = useCallback((oldData, item) => {
    const playersId = oldData.map((x) => x._id);
    if (!playersId.includes(item._id)) {
      return [...oldData, item];
    }

    return oldData;
  }, []);

  const hanleFilterSex = useCallback((select) => setselected(select), []);

  const handleSetPlayersFiltered = useCallback(
    (item) =>
      setPlayersFiltered((prevPlayersFiltered) => ({
        ...prevPlayersFiltered,
        [sexSelected]: uniquePlayers(prevPlayersFiltered[sexSelected], item),
      })),
    [sexSelected]
  );

  const handleRemovePlayersFiltered = useCallback(
    (data) => {
      setPlayersFiltered((prevPlayersFiltered) => ({
        ...prevPlayersFiltered,
        [sexSelected]: prevPlayersFiltered[sexSelected].filter(
          (item) => item._id !== data._id
        ),
      }));
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        [sexSelected]: prevPlayers[sexSelected].filter(
          (item) => item._id !== data._id
        ),
      }));
    },
    [sexSelected]
  );

  const handleComparePlayers = useCallback(
    (e) => {
      e.preventDefault();
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        [sexSelected]: playersFiltered[sexSelected],
      }))
    },
    [playersFiltered, sexSelected]
  );

  return (
    <StylePlayerComparisonComp>
      <Container>
          <StyleHeadingComparison>
            <Heading tagName="h1" mode="heading-h1">
              {trans('home:comparisonPlayer.title')}
            </Heading>
          </StyleHeadingComparison>
          <StyleDesFilterSex>
            <StyleDescription>{trans('home:comparisonPlayer.des')}</StyleDescription>
            <FilterBySex
              sexSelected={sexSelected}
              hanleFilterSex={hanleFilterSex}
              trans={trans}
            />
          </StyleDesFilterSex>
          <PlayersFilterComponent
            sexSelected={sexSelected}
            playersFiltered={playersFiltered}
            handleSetPlayersFiltered={handleSetPlayersFiltered}
            handleRemovePlayersFiltered={handleRemovePlayersFiltered}
            trans={trans}
          />
          {playersFiltered[sexSelected]?.length > 0 && <StyleButtonCompare>
              <Button type="gradiant" onClick={handleComparePlayers}>
                {trans('common:button.comparePlayer')}
              </Button>
            </StyleButtonCompare>}
            
            {players[sexSelected]?.length > 0 && <PlayersComponent players={players[sexSelected]} />}
      </Container>
    </StylePlayerComparisonComp>
  );
};
export default PlayerComparison;
