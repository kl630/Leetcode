/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    // 1. dp[i][j] means the max length of repeated subarray between nums1 when it ends with index i-1, and nums2 when it ends with index j - 1
    let dp = new Array(nums1.length + 1).fill(0).map(elem => new Array(nums2.length + 1).fill(0));
    let result = 0;
    // 2. recurrence formula
    // since dp[i][j] stands for when nums1 ending with nums1[i-1] and nums2 with nums2[j-1]
    // so if (nums1[i-1] === nums2[j-1]), then dp[i][j] = dp[i-1][j-1] + 1
    // because we are looking for consecutive repeated subarray
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            }
            result = Math.max(result, dp[i][j]);
        }
    }
    // 3. initialization
    // we would start from i = 1 and j = 1; for dp[i][0] and dp[0][j], we would initialize them as 0
    // actually, initially, everything in dp[i][j] will evaluate to 0
    // 4. traversal order
    // from front to back
    // 5. print out dp[i][j] to test it out
    console.log(dp);
    return result;
};