/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // 0/1 Knapsack Problem
    const sum = stones.reduce((p, v) => p + v);
    const target = Math.floor(sum / 2);
    let dp = new Array(target + 1).fill(0);
    
    for (let i = 0; i < stones.length; i++) { // outer for loop: items
        for (let j = target; j >= stones[i]; j--) { // inner for loop: knapsack
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    
    let setOne = dp[target];
    let setTwo = sum - dp[target];
    let result = sum - dp[target] - dp[target];
    return result;
    // Keren Question: what if we didn't find target weight??
    // e.g. stones = [5, 3, 10]; target = 9
    // dp[9] = 8
    // the other set of stones: sum - dp[9] = 10
};