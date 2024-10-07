/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = Array.from({ length: prices.length }, () => new Array(2).fill(-Infinity));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(0, dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][0] - prices[i], dp[i-1][1]);
    }
    
    return Math.max(dp[prices.length-1][0], dp[prices.length-1][1]);
};