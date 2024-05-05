const assert = require('assert');
const Player = require('./Player');

// Test suite for the Player class
describe('Player Class', function() {
    // Test case for the reduceHealth method
    describe('reduceHealth()', function() {
        // Test to ensure player health decreases by the specified amount
        it('should decrease player health by the specified amount', function() {
            let player = new Player(100, 10, 5);
            player.reduceHealth(20);
            assert.equal(player.health, 80);
        });

        // Test to prevent health from going below 0
        it('should not decrease health below 0', function() {
            let player = new Player(30, 5, 10);
            player.reduceHealth(40);
            assert.equal(player.health, 0);
        });
    });

    // Test case for the roll method
    describe('roll()', function() {
        // Test to ensure roll returns a number between 1 and 6
        it('should return a random number between 1 and 6', function() {
            let player = new Player(100, 10, 5);
            let rollResult = player.roll();
            assert.ok(rollResult >= 1 && rollResult <= 6);
        });
    });
});