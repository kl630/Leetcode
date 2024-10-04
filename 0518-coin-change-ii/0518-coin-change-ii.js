/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // DP
    // Knapsack: 0/1, complete
    
    // 1. dp[i][j] : for a knapsack that can hold weight of j, 
    // coins are going to use if from coins[0] up to coins[i]; how many ways there are 
    // to fill it up
    
    // coins[i]: [1, 2, 3]
    
    // 2. formula
    // 2D: dp[i][j] = dp[i-1][j - coins[i]] + dp[i-1][j];
    // 1D: dp[j] += dp[j-coins[i]]
    
    // 3. initialization
    // dp[0], dp[1]
    let dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    // dp[1] = 0 + dp[0] = 1
     
    // Combinations
    // for ()   --- items
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++)  {// 0 -> weight
            dp[j] += dp[j-coins[i]];
        }
    }
        // for  --- knapsack
    // amount = 3; coins = [1, 2]
    // dp: [1, 1, 2, 2]
    // i = 0; j = 1
    // dp[1] += dp[1 - coins[0]]
    // dp[1] += dp[0]
    // i = 0; j = 2
    // dp[2] += dp[2-1]
    // dp[2] += dp[1]
    // i = 0; j = 3
    // dp[3] += dp[2]
    
    // i = 1; j = 2
    // dp[2] += dp[0]
    // i = 1; j = 3
    // dp[3] += dp[3-2]
    // return dp[3]
    return dp[amount];
};