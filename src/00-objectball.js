function gameObject() {
    const teams = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return teams;
}


function numPointsScored(playerName) {
    const game = gameObject();
    const homePlayer = game.home.players[playerName];
    const awayPlayer = game.away.players[playerName];
    if (homePlayer) {
        return homePlayer.points;
    } else if (awayPlayer) {
        return awayPlayer.points;
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    const homePlayer = game.home.players[playerName];
    const awayPlayer = game.away.players[playerName];
    if (homePlayer) {
        return homePlayer.shoe;
    } else if (awayPlayer) {
        return awayPlayer.shoe;
    }
}

// console.log(shoeSize('Alan Anderson'));
// console.log(shoeSize('Ben Gordon'));

function teamName() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// console.log(teamName());

function playerNumbers(teamName) {
    const game = gameObject();
    const homeTeam = game.home;
    const awayTeam = game.away;
    const jerseyNumbers = [];

    if (homeTeam.teamName === teamName) {
        for (const player in homeTeam.players){
            let jerseyNumber = homeTeam.players[player].number;
            jerseyNumbers.push(jerseyNumber);
        }
    } else if (awayTeam.teamName === teamName) {
        for (const player in awayTeam.players) {
            let jerseyNumber = awayTeam.players[player].number;
            jerseyNumbers.push(jerseyNumber);
        }
    } else {
        return ["INVALID TEAM NAME"];
    }
    

    
    return jerseyNumbers;
}

// console.log(playerNumbers("Chicago Bulls"));

function playerStats(playerName) {
    const game = gameObject();
    const homeTeamPlayers = Object.keys(game.home.players);
    const awayTeamPlayers = Object.keys(game.away.players);
    for (const player of homeTeamPlayers) {
        if (player === playerName) {
            return game.home.players[playerName];
        }
    }
    for (const player of awayTeamPlayers) {
        if (player === playerName) {
            return game.away.players[playerName];
        }
    }
}
// console.log(playerStats("Brook Lopez"));
// console.log(playerStats("Jeff Adrien"));

function bigShoeRebounds() {
    const game = gameObject();
    const homeTeamPlayers = game.home.players;
    const awayTeamPlayers = game.away.players;
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = "";
    
    for (const player in homeTeamPlayers) {
        let shoeSize = homeTeamPlayers[player].shoe;
        if (shoeSize > largestShoeSize) {
            largestShoeSize = shoeSize;
            playerWithLargestShoeSize = player;
        }
    }
    for (const player in awayTeamPlayers) {
        let shoeSize = awayTeamPlayers[player].shoe;
        if (shoeSize > largestShoeSize) {
            largestShoeSize = shoeSize;
            playerWithLargestShoeSize = player;
        }
    }
    for (const player of Object.keys(homeTeamPlayers)) {
        if (player === playerWithLargestShoeSize) {
            return homeTeamPlayers[player].rebounds;
        }
    }
    for (const player of Object.keys(awayTeamPlayers)) {
        if (player === playerWithLargestShoeSize) {
            return awayTeamPlayers[player].rebounds;
        }
    }
}

// console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let maxPlayer = "";
    let maxPoints = 0;

    for (const homeOrAway in game) {
        for (const player in game[homeOrAway].players) {
            const points = game[homeOrAway].players[player].points;
            if (points > maxPoints) {
                maxPoints = points;
                maxPlayer = player;
            }
        }
    }
    return maxPlayer;
}

console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    const homeTeam = game.home.teamName;
    const awayTeam = game.away.teamName;
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (const player in game.home.players) {
        const points = game.home.players[player].points;
        homeTeamPoints += points;
    }
    for (const player in game.away.players) {
        const points = game.away.players[player].points;
        awayTeamPoints += points;
    }
    return (homeTeamPoints > awayTeamPoints) ? homeTeam : awayTeam;
}

console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();
    let playerName = "";
    for (const venue in game) {
        for(const player in game[venue].players) {
            if (player.length > playerName.length) {
                playerName = player;
            }
        }
    }
    return playerName;
}
console.log(playerWithLongestName());

function doesLongNameStealATon() {
    game = gameObject();
    const longNamePlayer = playerWithLongestName();
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (const venue in game) {
        for (const player in game[venue].players) {
            let steals = game[venue].players[player].steals;
            if (steals > mostSteals) {
                mostSteals = steals;
                playerWithMostSteals = player;
            }
        }
    }
    return (longNamePlayer === playerWithMostSteals);
}

console.log(doesLongNameStealATon());