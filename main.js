const Player = require('./Player');
const Match = require('./Match');

function main() {
    let playerA = new Player(50, 5, 10);
    let playerB = new Player(100, 10, 5);

    let match = new Match(playerA, playerB);
    match.simulateMatch();
}

module.exports = main;
