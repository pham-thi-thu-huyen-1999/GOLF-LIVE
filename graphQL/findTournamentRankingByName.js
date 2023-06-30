const findTournamentRankingByName = ( title ) => {
  return `{
    findTournamentRankingByName(tournament_name: "${title}") {
      tournament_name
      tournament_fullname
      rankings {
        rank
        name
        nationality
        average
        tournaments
      }
    }
  }`
}

export default findTournamentRankingByName
