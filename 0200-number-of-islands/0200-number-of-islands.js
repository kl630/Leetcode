/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    // loop for the first found 1
    // check 4 neighboring cells
    // how to check that if an island has ended
    // this step is important! once found an "1", convert it to 0 first, then check its 4 neighboring cells
    // grid = [
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"],
//   ["0","0","0","0","0"]
// ]
    // once found the first "1", update result to 1 (result++). The following operation just transforms island. It doesn't affect number of islands.
    const dfs = (x, y) => {
        // 1. params: position, x, y; and return value: void (it just transforms found "1" to "0")
        // 2. termination condition
        // if current position is out of bounds OR current position is "0" (not an island)
            // return;
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') {
            return;
        }
        // 3. handling of the path starting from the current cell
        // convert cur postion's "1" to "0"
        grid[x][y] = '0';
        // then call dfs() function on 4 neighboring cells
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);

    };
    
    // then in the nested for loop, keep looking for "1", whenever found another "1", result ++  
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j); // transforms island
                result++;
            }
        }
    }
    return result;
    // TODO: grid is empty, or it is [[]]
    
    // TODO: Extension! Found the max area value of a strict square area
};