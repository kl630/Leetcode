/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = sortedNums.length - 1;
        
        while (left < right) {
            let curSum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            
            if (curSum < 0) {
                left ++;
            } else if (curSum > 0) {
                right --;
            } else if (curSum === 0) {
                result.push([ sortedNums[i], sortedNums[left], sortedNums[right] ]);
                
                while (sortedNums[left] === sortedNums[left + 1]) {
                    left ++;
                }
                
                while (sortedNums[right] === sortedNums[right - 1]) {
                    right --;
                }
                
                left ++;
                right --;
            }
        }
    }
    
    return result;
};