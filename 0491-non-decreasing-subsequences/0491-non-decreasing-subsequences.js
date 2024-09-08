/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    // since we cannot sort the nums, in order to de-duplicate,
    // need to check if the current integer has already been 
    // used on the same tree level { 4, 7 , 6}
    
    // e.g. [4, 7, 6, 7]
    let result = [];
    let path = [];
    
    const backtracking = (startIndex) => {
        // termination condition
        if (path.length >= 2) {
            result.push([...path]);
        }
        let used = new Set();

        
        for (let i = startIndex; i < nums.length; i++) {
            if (i !== startIndex && used.has(nums[i]) || nums[i] < path[path.length - 1]) {
                continue;
            } else {
                path.push(nums[i]);
                used.add(nums[i]);
                backtracking(i + 1);
                path.pop();
            }
        }
    };
    
    backtracking(0);
    return result;
};

