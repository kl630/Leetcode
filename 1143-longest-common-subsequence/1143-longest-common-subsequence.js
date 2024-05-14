/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let arr1 = text1.split('');
    let arr2 = text2.split('');
    // arr1 = [ 'a', 'b', 'c', 'd', 'e' ]
    // arr2 = [ 'a', 'c', 'e' ]
    // 1. define dp array: dp array is a two-dimensional array, dp[i][j] means the max length of common subsequence from arr1 when it ends with arr1[i-1], and from arr2 when it ends with arr2[j-1]
    let dp = new Array(arr1.length + 1).fill(0).map(elem => new Array(arr2.length + 1).fill(0));
    // 2. recurrence formula
    // if (arr1[i-1] === arr2[j-1]), then dp[i][j] = dp[i-1][j-1] + 1;
    // if they are not the same, 
    // then dp[i][j] will be the max value between dp[i][j-1] and dp[i-1][j]
    for (let i = 1; i <= arr1.length; i++) {
        for (let j = 1; j <= arr2.length; j++) {
            if (arr1[i-1] === arr2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        } 
    }
    // 3. initialization
    // dp array initially is set to dp[i][j] = 0 
    // 4. traversal order; from front to back
    // 5. print dp array to test it out
    return dp[arr1.length][arr2.length];
};