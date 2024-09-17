/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // early termination is important- just return if it exists
    // if we have found one, just return true
    const m = board.length;
    const n = board[0].length;
    
    const backtracking = (x, y, wordIndex) => {
        if (x < 0 || x > m - 1 || y < 0 || y > n - 1 || board[x][y] !== word[wordIndex]) {
            return false;
        }
        if (wordIndex === word.length - 1) {
            return true;    
        }
        
        let temp = board[x][y];
        board[x][y] = '#';
        let result = backtracking(x-1, y, wordIndex+1) || backtracking(x+1, y, wordIndex+1) || backtracking(x, y-1, wordIndex+1) || backtracking(x, y+1, wordIndex+1);
        board[x][y] = temp;
        
        return result;
    };
    
    // loop through the board matrix, find the starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (backtracking(i, j, 0) === true) {
                    return true;
                }
            }
        }
    }
    
    return false;
};