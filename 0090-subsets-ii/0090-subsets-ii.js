/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // backtracking
    // tree-level de-duplicate
    // 1 2 2
    let result = [];
    let path = [];
    
    const sortedNums = nums.sort((a, b) => a - b);

    const backtracking = (startIndex) => {
        result.push([...path]);

        for (let i = startIndex; i < sortedNums.length; i++) {
            
            if (i !== startIndex && sortedNums[i] === sortedNums[i - 1]) {
                continue;
            } else {
                path.push(sortedNums[i]);
                backtracking(i + 1);
                path.pop();
            }
        }
    };
    
    backtracking(0);
    return result;
};