/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let max = 0;
    let visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false));
    
    // backtracking: take a position, returns the max gold that be collected from that position
    const backtracking = (x, y, curMax) => {
        let result = 0;
        // TODO: base case
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0 || visited[x][y]) {
            return curMax;
        }
        // e.g. we are at 6
        visited[x][y] = true;
        curMax += grid[x][y];
        result = Math.max(backtracking(x-1, y, curMax), backtracking(x+1, y, curMax), backtracking(x, y-1, curMax), backtracking(x, y+1, curMax))
        
        visited[x][y] = false; // backtracking
        curMax -= grid[x][y];
        return result;
    };
    
    // loop through the grid, 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // invoke backtracking on non-zero positions
            if (grid[i][j] !== 0) {
                // compare max with the result of backtracking() and update max (global variable)
                max = Math.max(max, backtracking(i, j, 0));
            }
        }
    }
    return max; // an integer
};