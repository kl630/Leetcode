/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    
    // Create two boolean matrices to mark reachable cells for both oceans
    const pacificVisited = Array.from({ length: m }, () => new Array(n).fill(false));
    const atlanticVisited = Array.from({ length: m }, () => new Array(n).fill(false));

    const dfs = (x, y, visited, prevHeight) => {
        // Check boundaries and visitation status
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || heights[x][y] < prevHeight) {
            return;
        }
        // Mark the cell as visited
        visited[x][y] = true;
        // Perform DFS for all 4 directions
        dfs(x + 1, y, visited, heights[x][y]);
        dfs(x - 1, y, visited, heights[x][y]);
        dfs(x, y + 1, visited, heights[x][y]);
        dfs(x, y - 1, visited, heights[x][y]);
    };

    // Start DFS from Pacific edge (left and top edges)
    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacificVisited, heights[i][0]);  // Left edge
        dfs(i, n - 1, atlanticVisited, heights[i][n - 1]);  // Right edge
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, pacificVisited, heights[0][j]);  // Top edge
        dfs(m - 1, j, atlanticVisited, heights[m - 1][j]);  // Bottom edge
    }

    // Collect the cells that can reach both oceans
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacificVisited[i][j] && atlanticVisited[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
};
