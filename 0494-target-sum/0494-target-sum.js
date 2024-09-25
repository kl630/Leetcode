/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    // left set , right set
    let leftSet, rightSet;
    let sum = nums.reduce((p, v) => p + v);
    // leftSet + rightSet = nums.reduce((p, v) => p + v);
    // leftSet - rightSet = target;
    if ((sum + target) % 2 === 1) return 0;
    if (sum < Math.abs(target)) return 0;
    
    leftSet = (sum + target) / 2;
    // e.g. leftSet = 4, rightSet = 1
    
    // use 2d dp array
    // dp[i][j] means with items from nums[0], nums[1], up to nums[i]
    // to fill up a knapsack that weights j
    // how many different ways there are
    let dp = Array.from({ length: nums.length }, () => new Array(leftSet + 1).fill(0));
    // dp[0][j] , dp[i][0]
    // if (leftSet === 0 && nums.length === 1)
    if (nums[0] <= leftSet) {
        dp[0][nums[0]] = 1;
    }
    
    dp[0][0] = 1;
    
    let numZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) numZero++;
        dp[i][0] = Math.pow(2, numZero);
    }
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < leftSet + 1; j++) {
            if (nums[i] > j) {
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j-nums[i]] + dp[i-1][j];
            }
        }
    }
    
    return dp[nums.length-1][leftSet];
};