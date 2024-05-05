const assert = require('assert');
const Player = require('./Player');
const Match = require('./Match');
const main = require('./Main');


// Test suite for the Main class
describe('Main Class', function() {
    // Test case to ensure the game simulation runs correctly
    describe('main()', function() {
        it('should run the game simulation', function() {
            // Set up to capture the console output for verification
            let consoleOutput = '';
            const originalConsoleLog = console.log;
            console.log = (message) => { consoleOutput += message + '\n'; };

            // Run the main function to start the game simulation
            main();

            // Restore the original console.log function
            console.log = originalConsoleLog;

            // Verify that the console output includes either "Player A wins!" or "Player B wins!"
            assert.ok(consoleOutput.includes('Player A wins!') || consoleOutput.includes('Player B wins!'));
        });
    });
});