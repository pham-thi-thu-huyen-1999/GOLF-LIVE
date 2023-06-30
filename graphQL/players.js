const findAllManPlayers = () => {
  return `
        {findAllManPlayers{
            _id
            player_name
            world_number
            avatar
            events{
                tour
                week
                event
                year
                finish_pos
                points_won
                weight
                adj_points
                rank_from
                rank_to
            }
            statistics{
                current_rank
                best_rank
                average_points
                total_points
                divisor	
                actual_events_played
            }
      }}
   `;
};

const findAllWomenPlayers = () => {
  return `
        {findAllWomenPlayers{
            player_name
            country
            avatar
            pos
            age
            events
            rookie_year
            race_to_cme_points
        }}
   `;
};

const findManPlayerByName = (name) => {
  return `
        {findManPlayerByName(player_name:"${name}"){
            _id
            player_name
            world_number
            avatar
            events{
                tour
                week
                event
                year
                finish_pos
                points_won
                weight
                adj_points
                rank_from
                rank_to
            }
            statistics{
                current_rank
                best_rank
                average_points
                total_points
                divisor	
                actual_events_played
            }
      }}
   `;
};

const findWomenPlayerByName = (name) => {
  return `
        {findWomenPlayerByName(player_name:"${name}"){
            _id
            player_name
            avatar
            age
            country
            events
            pos
            race_to_cme_points
            rookie_year
            social
            results {
                date
                tournament_name
                rounds_1
                rounds_2
                rounds_3
                rounds_4
                total
                final_pos
                tot_strokes
                tot_rounds
                score_avg
                official_money
            }
        }
    }
   `;
};

export {
  findAllManPlayers,
  findAllWomenPlayers,
  findWomenPlayerByName,
  findManPlayerByName,
};
