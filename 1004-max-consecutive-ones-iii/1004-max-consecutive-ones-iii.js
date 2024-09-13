/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // if in the current window, numOf0 > k,
    // then shrink the left side!!! This is very important!
    
    let result = 0;
    let zeroSums = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroSums++;
        }
        
        while (zeroSums > k) {
            if (nums[left] === 0) {
                zeroSums--;
            }
            left++;
        }
        
        result = Math.max(result, right - left + 1);
    }
    
    return result
};