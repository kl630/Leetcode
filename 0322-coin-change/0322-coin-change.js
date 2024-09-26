/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[j] means the fewest number of coins that can make up the target amount
    
    // dp[j] = Math.min(dp[j], dp[j-coins[i]] + 1);
    // if use the current coins[i]: dp[j-coins[i]] + 1
    // if don't use the current coins[i]: dp[j]
    
    // initialization:
    // dp[0] = 0; what if we can't find target amount
    let dp = new Array(amount+1).fill(+Infinity);
    dp[0] = 0;

    // Complete Knapsack, don't have to worry about permutations or combinations
    for (let i = 0; i < coins.length; i++) { // outer for loop: items
        for (let j = 1; j <= amount; j++) { // inner for loop: knapsack: front-> back
            if (coins[i] > j) {
                dp[j] = dp[j];
            } else {
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }
        
    return dp[amount] === +Infinity ? -1 : dp[amount];
};