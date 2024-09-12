
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // output: [] a one-dimensional array
    let result = [];
    // traverse the matrix
//     let i = 0;
//     let j = 0;
//     let offset = 0;
    
//     while (j < matrix[0].length) {
//         result.push(matrix[i][j]);
//         j ++;
//     }
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++; // Move the top boundary down

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move the right boundary left

        // Traverse from right to left along the bottom row, if still valid
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--; // Move the bottom boundary up
        }

        // Traverse from bottom to top along the left column, if still valid
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move the left boundary right
        }
    }
    return result;
};