/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // if i can reach the last index
    // depends on prev states
    
    // e.g. [3, 2, 1, 0, 4] -- to reach to elem 4
    // either jump from index 0 -> last index i
    // or jump from index 1 -> last index i
    // ... 
    // jump from index i-1 -> last index i
    
    //index   0, 1, 2, 3, 4
    //      [ 3, 2, 1, 0, 4 ]
    //        T. 
    // dp[0] is always true
    // dp[1] depends on: if dp[0] === true AND if i can jump from index 0 to index 1
    // dp[2] depends on: if dp[0] === true AND if i can jump from index 0 to index 2
    // OR if dp[1] === true AND if i can jump from index 1 to index 2
    
    // dp[i] = (dp[0] && nums[0] >= (i - 0)) || ...|| (dp[i-1] && nums[i-1] >= 1)
    let dp = new Array(nums.length).fill(false);
    dp[0] = true;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            let subRes = dp[j] && (nums[j] >= i - j);
            if (subRes) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[nums.length-1];
};