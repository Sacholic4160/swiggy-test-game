const assert = require('assert');
const Player = require('./Player');
const Match = require('./Match');
const main = require('./main');

describe('Main Class', function() {
    describe('main()', function() {
        it('should run the game simulation', function() {
            let consoleOutput = '';
            const originalConsoleLog = console.log;
            console.log = (message) => { consoleOutput += message + '\n'; };

            main();

            console.log = originalConsoleLog;

            assert.ok(consoleOutput.includes('Player A wins!') || consoleOutput.includes('Player B wins!'));
        });
    });
});