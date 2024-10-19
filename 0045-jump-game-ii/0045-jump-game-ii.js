/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump = 0;            // Track the number of jumps
    let curEnd = 0;          // End of the current jump range
    let farthest = 0;        // Farthest we can reach

    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest point reachable from the current position
        farthest = Math.max(farthest, i + nums[i]);

        // If we have reached the end of the current jump range
        if (i === curEnd) {
            jump++;            // Make a jump
            curEnd = farthest; // Move to the farthest point

            // If the current range covers the end, break early
            if (curEnd >= nums.length - 1) break;
        }
    }
    
    return jump;
};
