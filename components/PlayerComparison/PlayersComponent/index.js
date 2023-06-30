import Player from "../Player";
import { StyleCards } from "./style";

const PlayersComponent = ({ players }) => {

  return (
    <StyleCards>
      {!!players.length &&
        players.map((player, index) => {
          return (
            <Player
              key={`player-${index}`}
              player={player}
              rank={player?.world_number || player?.pos || 0}
              name={player.player_name}
              country={player.country}
            />
          );
        })}
    </StyleCards>
  );
};
export default PlayersComponent;
