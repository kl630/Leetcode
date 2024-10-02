/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = Array.from({ length: prices.length + 1 }, () => new Array(2).fill(0));
    // dp[0][0], dp[0][1]; dp[1][0] = 0, dp[1][1] = -7
    // Limit!! has to at least hold the stock before selling it, so dp[0][0], dp[0][1] doesn't make sense. And we need to initialize dp[1][0] and dp[1][1] 
    dp[1][0] = 0;
    dp[1][1] = -prices[0];
    for (let i = 2; i <= prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][1] + prices[i-1], dp[i-1][0]);
        // we should be starting with a clean slate, that's why if on day i, we hold the stock and it is by buying it on that day, the profit is simply -prices[i-1]
        // dp[i][1] = Math.max(dp[i-1][0] - prices[i-1], dp[i-1][1]);
        dp[i][1] = Math.max(- prices[i-1], dp[i-1][1]);

    }
    
    // dp[i][0] means ending on the i th day, don't hold stock, the max profit
        // 1). sold stock on that day, so prev day, i had the stock: 
        // dp[i-1][1] + prices[i-1]
    
        // 2). didn't have it on the prev day
        // dp[i][0] = dp[i-1][0]
    
        // So dp[i][0] = Math.max(dp[i-1][1] + prices[i-1], dp[i-1][0]);
    
    // dp[i][1] means ending on the i th day, holding stock, the max profit
        // 1). bought it on that day, so didn't have it the prev day: 
        // dp[i-1][0] - prices[i-1]
    
        // 2). had it the prev day: dp[i-1][1]
    
        // So dp[i][1] = Math.max(dp[i-1][0] - prices[i-1], dp[i-1][1]);
    
    // TODO: Question: why dp[i][0] won't go down?? 
    // Why it's either === or > than the prev day
    // because of this formula: dp[i][0] = Math.max(dp[i-1][1] + prices[i-1], dp[i-1][0]);
    // !!! on a certain day, or on the last day, the profit could go down, but what we want to get is the max profit throught out the whole time period. Even if the max profit didn't happen on the last day, but ending on the last day, the max profit that has ever occurred should still be that max profit 
    
    return dp[prices.length][0];
};