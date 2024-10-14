/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = new Array(nums1).fill(-1);
    // Create a monotonic stack for nums2
    let stack = [];
    let nextGreaterNums2 = new Array(nums2).fill(-1);
    // e.g. nextGreaterNums = [3, 4, -1, -1]
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums2[i] >= stack[stack.length - 1]) {
               stack.pop();
        }
        if (stack.length === 0) {
            nextGreaterNums2[i] = -1;
        } else {
            nextGreaterNums2[i] = stack[stack.length - 1];
        }
        stack.push(nums2[i]);
    }
    
    // Then loop through nums1 array to find index for each matching elem in nums2
    for (let i = 0; i < nums1.length; i++) {
        let matchingIndex = nums2.indexOf(nums1[i]);
        // use that found index to look up corresponding value in nextGreaterNums2 array
        // use that value in nextGreaterNums2 array to update result array
        result[i] = nextGreaterNums2[matchingIndex];
    }
    
    return result;  
};