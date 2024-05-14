/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 1. dp array: dp[i][j] means the max length of common subsequence between s and t when s ends with index i-1, and t ends with index j-1
    let dp = new Array(s.length + 1).fill(0).map((elem) => new Array(t.length + 1).fill(0));
    let arrayS = s.split('');
    let arrayT = t.split('');
    // 2. recurrence formula:
    // if (s[i-1] === t[j-1]), then dp[i][j] = dp[i-1][j-1] + 1;
    // if they are not equal, then dp[i][j] = dp[i][j-1] because it checks if s is a subsequence of t. we cannot delete any element from s. but we can delete some characters from t.
    for (let i = 1; i <= arrayS.length; i++) {
        for (let j = 1; j <= arrayT.length; j++) {
            if (arrayS[i-1] === arrayT[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = dp[i][j-1];
            }
        }
    }
    // 3. initialization: dp has 4 elements, in each subarray, there are 7 elements. they are all 0.
       // 0 a h b g d c
    // 0  0 0 0 0 0 0 0 
    // a  0 1 1 1 1 1 1
    // b  0 0 0 2 2 2 2
    // c  0 0 0 0 0 0 3
    // if the last element in the last subArray equals to the length of s,
    // that means s is a subsequence of t
    // 4. traversal order: top down, left to right
    // 5. print out dp array to test it out
    console.log(dp);
    return dp[arrayS.length][arrayT.length] === arrayS.length;
};