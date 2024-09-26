/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // Complete Knapsack
    // ask for number of combinations
    // outer for loop: items
        // inner for loop: knapsack. order is front -> back
    // 1D dp array: dp[j] += dp[j-coins[i]]
    // if (coins[i] > j) dp[j] = dp[j]
    // else dp[j] += dp[j-coins[i]]
    // Initialization: dp[0] = 1
    let dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    
    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i] > j) {
                dp[j] = dp[j];
            } else {
                dp[j] += dp[j-coins[i]];
            }
        }
    }
    
    return dp[amount];
};