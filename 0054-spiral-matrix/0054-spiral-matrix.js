var spiralOrder = function(matrix) {
    let result = [];
    
    // Handle edge case for empty matrix
    if (matrix.length === 0) return result;
    
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    
    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Traverse right
        for (let j = colStart; j <= colEnd; j++) {
            result.push(matrix[rowStart][j]);
        }
        rowStart++; // Move down
        
        // Traverse down
        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd]);
        }
        colEnd--; // Move left
        
        // Traverse left
        if (rowStart <= rowEnd) {
            for (let j = colEnd; j >= colStart; j--) {
                result.push(matrix[rowEnd][j]);
            }
            rowEnd--; // Move up
        }
        
        // Traverse up
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart]);
            }
            colStart++; // Move right
        }
    }
    
    return result;
};

// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function(matrix) {
//     let result = [];
//     let colStart = 0;
//     let colEnd = matrix[0].length - 1;
//     let rowStart = 0;
//     let rowEnd = matrix.length - 1;
    
//     // how to control the traversal? When to stop it?
//     while (colStart <= colEnd && rowStart <= rowEnd) {
//         // Traverse right: for loop. TODO: Can I use while loop?
//         for (let i = colStart; i <= colEnd; i++) {
//             result.push(matrix[rowStart][i]);
//         }
//         rowStart++;
        
//         // Traverse down
//         for (let i = rowStart; i <= rowEnd; i++) {
//             result.push(matrix[i][colEnd]);
//         }
//         colEnd--;
        
//         // Traverse left
//         if (colStart <= colEnd) {
//             for (let i = colEnd; i >= colStart; i--) {
//                 result.push(matrix[rowEnd][i]);
//             }
//             rowEnd--;
//         }
    
//         // Traverse up
//         if (rowStart <= rowEnd) {
//             for (let i = rowEnd; i >= rowStart; i--) {
//                 result.push(matrix[i][colStart]);
//             }
//             colStart++;
//         }
//     }
    
//     return result;
// };