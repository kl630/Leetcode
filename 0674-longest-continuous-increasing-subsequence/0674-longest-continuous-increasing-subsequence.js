/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    // 1. define dp[i]
    // dp[i] means the length of continuous increasing subarray up to nums[i] (inclusive) 
    let result = 1;
    let dp = new Array(nums.length).fill(1);
    // 2. recurrence formula
    // loop through array nums starting from index 1, pointer i
    // compare the value of nums[i] with the previous one nums[i - 1]
    // if nums[i] > nums[i - 1], we can extend the subarray
    // dp[i] = dp[i - 1] + 1
    // keep track of dp[i], compare it with result
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
            result = Math.max(result, dp[i]);
        }
    }
    return result;
    // 3. initialization
    // initially dp[i] is all 1
    // 4. traversal order
    // from front to back
    // 5. example to test it out
    // nums = [1,3,5,4,7]
    // dp = [1, 2, 3, 1, 2]

    // *** Extension: instead of just return the longest length, return the subarray itself

};