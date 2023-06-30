import { StylePlayerComponent, StyleAvt, StyleTitlePlayer } from "./style";
import { StyleDescription } from "../style"
import LabelText from "../LabelText";
import TitlePlayer from "../TitlePlayer"
import { useMemo } from "react";

const Player = ({ player, rank, name, country }) => {
  let unique = Date.now()

  const compares = useMemo(() => {
    let statistics = []
    if (player?.statistics) {
      statistics = Object.keys(player.statistics)
    } else {
      const comparePlayerWomen = {
        age: player.age,
        events: player.events,
        pos: player.pos,
        race_to_cme_points: player.race_to_cme_points
      };
      statistics = Object.keys(comparePlayerWomen)
    }

    return statistics
  }, [player])

  return <StylePlayerComponent>
    <StyleAvt $image={player.avatar} />
    <StyleTitlePlayer>
      <TitlePlayer name={name}
        country={country} />
      <StyleDescription>
        Rank {rank}
      </StyleDescription>
    </StyleTitlePlayer>
    {compares?.length && compares.map((item, index) => {
      return <LabelText key={`label-text-item-${unique}-${index}`} item={item}
        compares={player.statistics ? player.statistics : player} />
    })}
  </StylePlayerComponent>
}
export default Player
