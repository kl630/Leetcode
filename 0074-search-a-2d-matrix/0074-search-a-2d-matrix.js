/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // loop through matrix- 2D array
    for (let i = 0; i < matrix.length; i++) {
        // need to reset left and right pointers here
        let left = 0;
        let right = matrix[0].length - 1;
        
        // look at current subarray
        let curSubArr = matrix[i];
        // if its min val is larger than target
        if (curSubArr[0] > target) {
            // return false
            return false;
        } else if (curSubArr[curSubArr.length - 1] < target) {// if its max val is less than target
            // move onto next subarray in the matrix
            continue; // Keren question: I think this is correct
        } else {
        // else
            // conduct binary search on this subarray
            while (left <= right) {
                let middle = Math.floor((left + right) / 2);

                if (curSubArr[middle] === target) {
                    return true;       // if found - return true
                } else if (curSubArr[middle] < target) {
                    left = middle + 1;   
                } else if (curSubArr[middle] > target) {
                    right = middle - 1;
                }
            }
      
            // if not found - move onto next subarray in the matrix
        }
    
    }
    
    // if found
        // return true;
    return false;
};