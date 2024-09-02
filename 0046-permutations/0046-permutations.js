/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // instead of splice method, try using "used" tag
    let result = [];
    let path = [];
    let used = Array(nums.length).fill(false);
    const backtracking = () => {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
        
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) {
                    continue;
                } else {
                    path.push(nums[i]);
                    used[i] = true;
                    backtracking(i); 
                    path.pop();
                    used[i] = false;
                }
            }

    };
    backtracking();
    return result;

};