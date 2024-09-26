/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // Complete Knapsack
    // items = [1, 4, 9, 16, 25, ...]
    // knapsack weight is n
    // dp[j] means the least number of square numbers to use to fill up the knapsack
        // use items[i]: dp[j-items[i]] + 1
        // don't use items[i]: dp[j]
    // so recurrence formula: dp[j] = Math.min(dp[j], dp[j-items[i]] + 1) ;
    
    // initialization: and what about dp[0]?
    // dp[0] = 1, the rest +Infinity
    
    // very similar to Coin Change: the least number of coins to use
    // pruning
    // outer for loop: items  ** the items and knapsack order doesn't really matter here
        // inner for loop: knapsack * from front to back
    let dp = new Array(n+1).fill(+Infinity);
    dp[0] = 0;
    
    for (let i = 1; i * i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
        }
    } 
    
    console.log('log dp', dp)
    
    return dp[n];
};