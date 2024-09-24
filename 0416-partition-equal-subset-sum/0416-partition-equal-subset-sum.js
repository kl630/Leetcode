/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // In essence, it's a 0/1 Knapsack problem.
    // the goal is to find a knapsack which can hold target weight: 
        // target weight = (sum of nums array) / 2
    // the items that we can put inside are the given nums.
        // both of their weight and value are the given nums
    
    
    // 1D dp array
        // dp[j] means the max items value when the knapsack can
        // hold weight of j
    let sum = nums.reduce((p, v) => p + v);
    if (sum % 2 === 1) return false;
    
    let target = sum / 2;
    let dp = new Array(target + 1).fill(0);

    // nums = [1,5,11,5]
    // index: 0    1    2     3    4    5    6    7    8     9     10    11
    // dp:    0    1    1     1    1   (5)
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === target) return true;
        }
    }
    return false;
    // recurrence formula for 0/1 Knapsack
        // dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
            // former: don't put item[i]; latter: put item[i]
    
    // outer for loop: items
        // inner for loop: knapsack *** loop it backwards
    
    // TODO: try reverse two for loops, and see what happens
    // TODO: try doing inner for loop forward, and see what happens
};