/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // look for an 'O'
    // if it is on the edge or out of bounds, don't change it.
    // mark it as visited.
    // 4 neighboring cells
    const m = board.length;
    const n = board[0].length;
    
    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') {
            return;
        }
        
        board[x][y] = '@';
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);
    };
    
    // first row and last row
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            dfs(0, j);
        }
        if (board[m-1][j] === 'O') {
            dfs(m-1, j);
        }
    }
    
    // first column and last column
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0);
        }
        if (board[i][n-1] === 'O') {
            dfs(i, n-1);
        }
    }
    console.log('log board', board);
    
    // Convert all '@' -> '0'
    // all the rest to -> 'X'
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === '@') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
    
    return board;
};