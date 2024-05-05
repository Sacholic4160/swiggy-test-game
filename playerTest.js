const assert = require('assert');
const Player = require('./Player');

describe('Player Class', function() {
    describe('reduceHealth()', function() {
        it('should decrease player health by the specified amount', function() {
            let player = new Player(100, 10, 5);
            player.reduceHealth(20);
            assert.equal(player.health, 80);
        });

        it('should not decrease health below 0', function() {
            let player = new Player(30, 5, 10);
            player.reduceHealth(40);
            // Ensure that health does not go below 0
            assert.equal(player.health, 0);
        });
    });

    describe('roll()', function() {
        it('should return a random number between 1 and 6', function() {
            let player = new Player(100, 10, 5);
            let rollResult = player.roll();
            assert.ok(rollResult >= 1 && rollResult <= 6);
        });
    });
});