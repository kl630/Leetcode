/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    // Define the DFS function
    function dfs(x, y) {
        // Check if out of bounds or water (0)
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0) {
            return 0;
        }
        
        // Mark the cell as visited by setting it to water (0)
        grid[x][y] = 0;

        // Initialize area for this island
        let area = 1;

        // Explore all four directions
        area += dfs(x + 1, y); // down
        area += dfs(x - 1, y); // up
        area += dfs(x, y + 1); // right
        area += dfs(x, y - 1); // left

        return area;
    }

    if (!grid || grid.length === 0) {
        return 0;
    }

    let maxArea = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                // Start a new DFS for this island
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
}
