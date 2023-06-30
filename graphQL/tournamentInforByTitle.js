const tournamentInforByTitle = ( title ) => {
    return '{\n' +
        '  findTournamentDetailByName(tournament_name:"'+title+'"){\n' +
        '    tournament_name\n' +
        '    tournament_fullname\n' +
        '    prize_money\n' +
        '    par\n' +
        '    dates\n' +
        '    tournament_status\n' +
        '  }\n' +
        '}'
}

export default tournamentInforByTitle
