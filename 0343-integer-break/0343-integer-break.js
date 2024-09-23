/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 1. dp array
    // dp[i] means the max product when breaking i into 2 or more intergers
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    if (n === 2) return 1;
    
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(j * (i-j), j * dp[i-j], dp[i]);
        }
    }
    // 2. recurrence formula
    // a.break n into 2 intergers: namely interger j, and integer i - j
        // their product is j * (i -j)
    // OR 
    // b. more than 2 
        // their product is j * dp[i-j]
        // (dp[i-j] means the max product
        // when breaking i-j into 2 or more intergers) 
    
    
    // 3. initialization
    // Question: what about dp[1]???
    // dp[2] = 1
    // dp[3] = 
    // 1, 1, 1.  OR 1, 2 OR 2, 1
    // 4. traversal order
    // 5. print it out for testing
    return dp[n];
};