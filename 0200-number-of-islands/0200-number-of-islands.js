/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    // dfs
    const dfs = (x, y) => {
        // 1. params and return value: return num of islands
        let numOfIslands = 0;
        // 2. base case
        if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y] || grid[x][y] === '0') {
            return 0;
        }
        
        if (grid[x][y] === '1' && !visited[x][y]) {
            numOfIslands++; 
        }

        visited[x][y] = true;
        
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);
        // 3. logic at each recursion level
        
        // TODO: use visited helper grid
        return numOfIslands;
    };
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                result += dfs(i, j);
            }
        }
    }
    return result;
};