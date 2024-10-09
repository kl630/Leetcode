/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let max = 0;
    let visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false));
    
    // backtracking: take a position, returns the max gold that be collected from that position
    const backtracking = (x, y) => {
        let result = 0;
        // base case
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0 || visited[x][y]) {
            return 0;
        }
        // e.g. we are at 6
        visited[x][y] = true;
        // curMax += grid[x][y];
        result = Math.max(backtracking(x-1, y), backtracking(x+1, y), backtracking(x, y-1), backtracking(x, y+1)) + grid[x][y];
        
        visited[x][y] = false; // backtracking
        return result;
    };
    
    // loop through the grid, 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // invoke backtracking on non-zero positions
            if (grid[i][j] !== 0) {
                // compare max with the result of backtracking() and update max (global variable)
                max = Math.max(max, backtracking(i, j));
            }
        }
    }
    return max; // an integer
};