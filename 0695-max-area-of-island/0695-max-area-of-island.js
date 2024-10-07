/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    // bfs (x, y) 
    // params: cur location, and return value: curArea
    // just to update result
    const dfs = (x, y) => {
        let curArea = 0;

        // TODO: base case:
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== 1) {
            return 0;
        }
        // recursive logic
        // when we are here, we are currently at a '1'
        curArea++;
        console.log('log curArea', curArea);
        // mark cur position as visited
        grid[x][y] = '#'; // TODO: Or to change it to '0', OR use a helper
                          // visited grid if we cannot modify original grid

        // Explore its 4 neighboring cells- invoke bfs on 4 neighbors
        curArea += dfs(x-1, y);
        curArea += dfs(x+1, y);
        curArea += dfs(x, y-1);
        curArea += dfs(x, y+1);
        return curArea;
    };
    
    // Loop through the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) { // do operations on '1'
                // invoke bfs on it
                // get curArea and compare it with maxArea
                maxArea = Math.max(dfs(i, j), maxArea);
            }
        }
    }
    return maxArea; // an integer
};