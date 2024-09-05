/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let sum = 0;
    let minLen = +Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            curLen = right - left + 1;
            minLen = Math.min(minLen, curLen);
            sum -= nums[left];
            left++;
        }
    }
    
    return minLen === +Infinity ? 0 : minLen;
};