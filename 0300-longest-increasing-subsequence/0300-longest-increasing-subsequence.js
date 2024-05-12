/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Dynamic Programming
    // 1. define dp array and what dp[i] means
    // dp[i] means the length of the longest increasing subsequence up to nums[i] (inclusive)
    // e.g. nums = [10, 9, 2, 5, 3, 7, 101, 18];
    // dp = [1, 1, 1, 2, 2, 3, 4, 4];
    let dp = new Array(nums.length).fill(1);
    let result = 1;
    // 2. define recursion formula
    // outer loop: pointer i starts from index 1, and traverse the entire array nums
    // inner loop: pointer j starts from index 0 and traverse up to index j (exclusive)
    // while we traverse, we compare nums[i] with each nums[j]
    // if nums[i] > nums[j], that means we can extend the sequence up to nums[i] 
    // because it's still increasing (we keep the momentum~~)
    // so dp[i] can be dp[j] + 1. But we also need to keep track of the previous dp[i]
    // so dp[i] = Math.max(dp[i], dp[j] + 1); Because while we move pointer j, dp[j] + 1 might go down
    // and we might lose the maximum value if we don't keep track of the previous max value
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // if (dp[i] > result) {
        //     result = dp[i];
        // }
        result = Math.max(dp[i], result);
    }
    // 3. initialization
    // means there is no pointer j considered. just the nums[i] itself to form its own array
    // then we add the pointer j to traverse the element in front of nums[i]
    // initially dp array looks like [1, 1, 1, 1, 1, 1, 1, 1]
    // 4. decide on traversal order
    // for the outer loop: traverse from the front to back
    // inner loop: front to back
    // 5. use an example to test it out
    // nums = [1,3,6,7,9,4,10,5,6]
    // dp = [1, 2, 3, 4, 5, 3, 6, 4, 5]
    // this is a better example. we shouldn't return dp[nums.length - 1], because we might go down.
    // we need to keep track of the current dp[i] and find the max value
    return result;
};