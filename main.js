// Import the necessary classes
const Player = require('./player.js');
const Die = require('./die.js');
const Match = require('./match.js');

// Create two players with different attributes
let playerA = new Player(50, 5, 10);
let playerB = new Player(100, 10, 5);

// Create a new match between the two players
let match = new Match(playerA, playerB);

// Simulate the match between the two players
match.simulateMatch();