/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    const dfs = (x, y) => {
        // 1. params and return value: return area val
        // 2. termination condition
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) {
            return 0;
        }
        // 3. handling the path starting from the current position
        // TODO: STILL A BIT CONFUSED ON HOW TO HANDLE THE FIRST FOUND 1
        // set area initially as 1, so it includes the current found 1
        let area = 1;
        // Do we still need this check: grid[x][y] === 1? No, it was already checked
        // try to expand the island by checking up/down/left/right
        // But need to de-duplicate, mark the current grid[x][y] as 0, so it won't visited more than once
        grid[x][y] = '#';
        area += dfs(x-1, y);
        area += dfs(x+1, y);
        area += dfs(x, y-1);
        area += dfs(x, y+1);

        return area;
    };
    
    // loop throught grid and loop for 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }
    return maxArea;
};