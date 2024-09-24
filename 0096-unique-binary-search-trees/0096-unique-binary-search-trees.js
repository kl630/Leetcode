/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // look for patterns so that we can form recurrence formula
    // Pay attention: we want to form BST!
    // think of all the scenarios where (n=3) 1 is the root: 0 && 2, 2 is the root: 1 && 1. 3 is the root: 2 && 0
    // dp[3] = 5
    // 
    let dp = new Array(n+1).fill(0);
    dp[0] = 1
    dp[1] = 1;
    dp[2] = 2;
    if (n === 1) return 1;
    if (n === 2) return 2;
    for (let i = 3; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i-j-1];
        }
    }
    return dp[n];
};