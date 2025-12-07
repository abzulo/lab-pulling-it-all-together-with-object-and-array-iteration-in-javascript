function gameObject() {
  return {
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
        "Reggie Evens": {
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
        },
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
        "Bismack Biyombo": {
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
        "Brendan Hayword": {
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
}

/* ------------------------------------------
   HELPERS
------------------------------------------ */

function allPlayers() {
  const game = gameObject();
  const combined = {};

  const homePlayers = game.home.players;
  const awayPlayers = game.away.players;

  for (const player in homePlayers) {
    combined[player] = homePlayers[player];
  }

  for (const player in awayPlayers) {
    combined[player] = awayPlayers[player];
  }

  return combined;
}

/* ------------------------------------------
   REQUIRED FUNCTIONS
------------------------------------------ */

function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName].points;
}

function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName].shoe;
}

function teamColors(teamName) {
  const game = gameObject();

  for (const side in game) {
    if (game[side].teamName === teamName) {
      return game[side].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  const result = [];

  for (const side in game) {
    if (game[side].teamName === teamName) {
      const players = game[side].players;

      for (const p in players) {
        result.push(players[p].number);
      }
    }
  }

  return result;
}

function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}

function bigShoeRebounds() {
  const players = allPlayers();
  let biggestShoe = 0;
  let bigRebounds = 0;

  for (const p in players) {
    if (players[p].shoe > biggestShoe) {
      biggestShoe = players[p].shoe;
      bigRebounds = players[p].rebounds;
    }
  }

  return bigRebounds;
}

/* ------------------------------------------
   BONUS
------------------------------------------ */

function mostPointsScored() {
  const players = allPlayers();
  let maxPlayer = "";
  let maxPoints = 0;

  for (const p in players) {
    if (players[p].points > maxPoints) {
      maxPoints = players[p].points;
      maxPlayer = p;
    }
  }

  return maxPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homeTotal = 0;
  let awayTotal = 0;

  const homePlayers = game.home.players;
  const awayPlayers = game.away.players;

  for (const p in homePlayers) {
    homeTotal += homePlayers[p].points;
  }

  for (const p in awayPlayers) {
    awayTotal += awayPlayers[p].points;
  }

  return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const players = allPlayers();
  let longest = "";

  for (const p in players) {
    if (p.length > longest.length) {
      longest = p;
    }
  }

  return longest;
}

/* ------------------------------------------
   SUPER BONUS
------------------------------------------ */

function doesLongNameStealATon() {
  const players = allPlayers();
  const longName = playerWithLongestName();

  let maxSteals = 0;
  let stealLeader = "";

  for (const p in players) {
    if (players[p].steals > maxSteals) {
      maxSteals = players[p].steals;
      stealLeader = p;
    }
  }

  return stealLeader === longName;
}

/* ------------------------------------------
   EXPORTS
------------------------------------------ */

module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon,
};
