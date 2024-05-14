/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    // exactly the same as finding the longest common subsequence problem #1143
    // 1. dp array
    let dp = new Array(nums1.length + 1).fill(0).map(elem => new Array(nums2.length + 1).fill(0));
    // 2. recurrence formula
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    // 3. initialization
    // 4. traveral order
    // 5. print out the dp array to test it out
    console.log(dp);
    return dp[nums1.length][nums2.length];
};