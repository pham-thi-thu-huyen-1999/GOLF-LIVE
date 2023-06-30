const tournamentByTitle = ( title ) => {
    return '{\n' +
        '  findTournamentDetailByName(tournament_name:"'+title+'"){\n' +
        '    tournament_name\n' +
        '    tournament_fullname\n' +
        '    prize_money\n' +
        '    par\n' +
        '    dates\n' +
        '    tournament_status\n' +
        '    results {\n' +
        '      rank\n' +
        '      player\n' +
        '      par\n' +
        '      thru\n' +
        '      today\n' +
        '      round1\n' +
        '      round2\n' +
        '      round3\n' +
        '      round4\n' +
        '      round_all\n' +
        '    }\n' +
        '  }\n' +
        '}'
}

export default tournamentByTitle
