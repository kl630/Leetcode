/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = -Infinity;
    let curStreak = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curStreak++;
        } else {
            result = Math.max(result, curStreak);
            curStreak = 0;
        }
    }
    result = Math.max(result, curStreak);
    return result;
};