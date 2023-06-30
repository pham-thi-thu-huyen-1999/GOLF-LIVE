const rankingWomenPlayerByName = (
    name
) => {
    return `{
		findWomenPlayerByName (player_name:"${name}"){
			player_name
			avatar
			age
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
	}`
}

export default rankingWomenPlayerByName