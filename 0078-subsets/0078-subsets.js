/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [[]];
    let path = [];
    // Backtracking 3 steps
    const backtracking = (startIndex) => {
        // 1. params and return value
        // 2. termination condition
        
        // 3. logic at each recursion level
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            // if (result.includes(path)) {
            //     backtracking(i + 1);
            //     path.pop();
            // } else 
            {
                result.push([...path]);
                backtracking(i + 1);
                path.pop();
            }
            
        }
        
    };
    
    backtracking(0);
    return result;
};