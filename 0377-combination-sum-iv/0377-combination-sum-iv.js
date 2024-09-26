/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // It's permutations!!! 
    // outer for loop: knapsack
        // inner for loop: items 
        // *** Complete Knapsack, so inner loop's order is front->back
    // dp[i] += dp[i-nums[j]] !!!
    // initialization: dp[0] = 1
    let dp = new Array(target+1).fill(0);
    dp[0] = 1;
    
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > i) {
                dp[i] = dp[i];
            } else {
                dp[i] += dp[i-nums[j]];
            }
        }
    }
    
    return dp[target];
};