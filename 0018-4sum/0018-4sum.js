/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    let sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        
        for (let j = i + 1; j < sortedNums.length; j++) {
            if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

            if (j > i) {
                let left = j + 1;
                let right = sortedNums.length - 1;
                
                while (left < right) {
                    let curSum = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];
                    
                    if (curSum < target) {
                        left ++;
                    } else if (curSum > target) {
                        right --;
                    } else if (curSum === target) {
                        result.push([ sortedNums[i], sortedNums[j], sortedNums[left], sortedNums[right] ]);
                        
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
        }
    }
    
    return result;
};