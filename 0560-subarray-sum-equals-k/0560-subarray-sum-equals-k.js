/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // prefix sum + hash map
    let result = 0;
    let record = new Map();
    
    let prefixArr = new Array(nums.length).fill(0);
    
    prefixArr[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefixArr[i] = prefixArr[i - 1] + nums[i];
    }
    console.log('log prefixArr', prefixArr);
    
    record.set(0, 1);
    for (let i = 0; i < prefixArr.length; i++) {
        let diff = prefixArr[i] - k;
        if (record.has(diff)) {
            result += record.get(diff);
        }
        
        record.set(prefixArr[i], (record.get(prefixArr[i]) || 0) + 1);
        
    }
    
    return result;
};