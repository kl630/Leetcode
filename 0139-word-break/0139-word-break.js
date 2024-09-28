/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) { // knapsack
        for (let j = 0; j < i; j++) { // items
            let subString = s.slice(j, i);
            if (wordDict.includes(subString) && dp[j] === true) {
                dp[i] = true;
            }
        }
    }
    return dp[s.length];
};