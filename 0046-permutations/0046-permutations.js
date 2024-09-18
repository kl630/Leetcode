/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
     //   1    2    3
    //  2 3
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);
    
    const backtracking = () => {
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