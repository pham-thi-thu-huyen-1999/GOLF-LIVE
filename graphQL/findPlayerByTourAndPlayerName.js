const tourPlayerByTourAndPlayerName = ({
    title,
    player
}) => {
    return `{
    findPlayerByTourAndPlayerName (tournament_name:"${title}", player:"${player}"){
			full_name
			avatar
			header_info {
				info_1
				info_2
			}
			round{
				par{
					par0
					par1
					par2
					par3
					par4
					par5
					par6
					par7
					par8
					par9
					par10
					par11
					par12
					par13
					par14
					par15
					par16
					par17
				}
				tee{
					tee0
					tee1
					tee2
					tee3
					tee4
					tee5
					tee6
					tee7
					tee8
					tee9
					tee10
					tee11
					tee12
					tee13
					tee14
					tee15
					tee16
					tee17
				}
			}
			score {
				rank
				player
				par
				thru
				today
				round1
				round2
				round3
				round4
				round_all
			}
		}
	}`
}

export default tourPlayerByTourAndPlayerName