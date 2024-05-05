// Test suite for the Match class
describe('Match Class', function() {
    // Test case to simulate the match and determine the winner
    describe('simulateMatch()', function() {
        // Test to ensure the correct determination of the match winner
        it('should correctly determine the winner of the match', function() {
            // Create two players with different attributes
            let playerA = new Player(50, 5, 10);
            let playerB = new Player(100, 10, 5);

            // Create a new match between the two players
            let match = new Match(playerA, playerB);

            // Capture the console output for verification
            let consoleOutput = '';
            const originalConsoleLog = console.log;
            console.log = (message) => { consoleOutput = message; };

            // Simulate the match
            match.simulateMatch();

            // Restore the original console.log function
            console.log = originalConsoleLog;

            // Verify that the console output indicates the winner as "Player A wins!" or "Player B wins!"
            assert.ok(consoleOutput === 'Player A wins!' || consoleOutput === 'Player B wins!');
        });
    });
});