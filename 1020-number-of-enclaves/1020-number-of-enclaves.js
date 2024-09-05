var numEnclaves = function(grid) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const m = grid.length;
    const n = grid[0].length;

    // DFS to mark land connected to the boundary as water
    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) return;
        grid[x][y] = 0;  // Mark as water
        for (let [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }
    };

    // Step 1: Eliminate boundary-connected land
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) dfs(i, 0);
        if (grid[i][n - 1] === 1) dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 1) dfs(0, j);
        if (grid[m - 1][j] === 1) dfs(m - 1, j);
    }

    // Step 2: Count the remaining enclaves
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) count++;
        }
    }

    return count;
};
