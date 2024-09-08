/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // Permutations! Order matters. So no startIndex anymore.
    // But need to check if the current integer has already been used or not
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);

    
    const backtracking = () => {
        // termination condition
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                path.push(nums[i]);
                used[i] = true;
                backtracking();
                path.pop();
                used[i] = false;
            }
        }
        
    };
    
    backtracking();
    return result;
};