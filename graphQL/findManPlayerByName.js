const rankingManPlayerByName = (
    name
) => {
    return `{
		findManPlayerByName (player_name:"${name}"){
			player_name
			world_number
			avatar
			country
			events {
				event
				tour
				week
				year
				finish_pos
				points_won
				weight
				adj_points
				rank_from
				rank_to
			}
			statistics {
				current_rank
				best_rank
				average_points
				total_points
				divisor
				actual_events_played
			}
		}
	}`
}

export default rankingManPlayerByName