/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // Dynamic Programming
    // Essentailly, we want to return how many ways there are to form arrayT from arrayS
    // So we cannot change arrayT, but we can skip/remove characters from arrayS
    // 1. DP array
    // dp array is a two-dimensional array, in which dp[i][j] stands for how many ways to form arrayT from arrayS, when arrayT ends with index i-1, and when arrayS ends with index j-1 
    
    //   0 b a b g b a g
    // 0 1 1 1 1 1 1 1 1
    // b 0 1 1 2 2 3 3 3
    // a 0 0 1 1 1 1 4 4
    // g 0 0 0 0 1 1 1 5
    let arrayS = s.split('');
    let arrayT = t.split('');
    let dp = new Array(arrayT.length + 1).fill(0).map((elem) => new Array(arrayS.length + 1).fill(0));
    for (let j = 0; j <= arrayS.length; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < arrayT.length; i++) {
        dp[i][0] = 0;
    }
    
    // 2. recurrence formula
    // if (arrayT[i-1] === arrayS[j-1]), we can actually either to use that s[j-1] to form arrayT, 
    // OR not to use it
    // if we use that s[j-1], then that's one way to form arrayT, and dp[i][j] can be deduced from dp[i-1][j-1];
    // if we don't use that s[j-1], then we remove s[j-1] from the current array, so we actually go back to s[j-2], and we will look at how many ways to form arrayT from arrayS, when arrayT ends with index i-1, while arrayS ends with index j - 2;
    // Which, by dp array's definition, will be dp[i][j-1]
    // so in conclusion, if (arrayT[i-1] === arrayS[j-1]), dp[i][j] = dp[i-1][j-1] + dp[i][j-1];
    // if (arrayT[i-1] !== arrayS[j-1]), then dp[i][j] = dp[i][j-1]
    // finally, we return dp[arrayT.length][arrayS.length]
    for (let i = 1; i <= arrayT.length; i++) {
        for (let j = 1; j <= arrayS.length; j++) {
            if (arrayT[i-1] === arrayS[j-1]) {
                dp[i][j] = dp[i-1][j-1] + dp[i][j-1];
            } else {
                dp[i][j] = dp[i][j-1];
            }
        }
    }
    // 3. initialization
    // initialization is a bit different from previous subsequence/subarray problems
    // still it's about the definition of dp array
    // 4. traversal order
    // top -> down, left -> right
    // 5. print out dp array to test it out
    console.log(dp);
    return dp[arrayT.length][arrayS.length];
};