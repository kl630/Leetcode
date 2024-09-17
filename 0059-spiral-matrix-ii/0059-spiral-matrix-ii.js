/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = Array.from({ length: n }, () => new Array(n).fill(0));
    
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let count = 1;
    
    while (colStart <= colEnd && rowStart <= rowEnd) {
        // left -> right
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = count;
            count++;
        }
        rowStart++;
        
        // top -> down
        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = count;
            count++;
        }
        colEnd--;
        
        // right -> left
        if (colStart <= colEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                matrix[rowEnd][i] = count;
                count++;
            }
            rowEnd--;
        }
        
        // bottom -> up
        if (rowStart <= rowEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                matrix[i][colStart] = count;
                count++;
            }
            colStart++;
        }
    }
    
    return matrix;
};