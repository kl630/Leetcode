/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = Array.from({ length: n }, () => new Array(n).fill(0) );
    let elem = 1;
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    
    // while (elem <= n * n) {
    while (colStart <= colEnd && rowStart <= rowEnd) {
        // Traverse right
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = elem;
            elem ++;
        } 
        rowStart++;
        
        // Traverse down
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = elem;
            elem ++;
        }
        colEnd--;
           
        // Traverse left
        if (colStart <= colEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result[rowEnd][i] = elem;
                elem ++;
            }
            rowEnd--;
        }
        
        // Traverse up
        if (rowStart <= rowEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result[i][colStart] = elem;
                elem ++;
            }
            colStart++;
        }
    }
    return result;
};