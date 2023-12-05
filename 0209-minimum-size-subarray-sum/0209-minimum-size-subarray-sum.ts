function minSubArrayLen(target: number, nums: number[]): number {
    // sliding window, still similar to two pointers
    // index j points to the ending position
    // the key here is to know how to move the starting position- index i 
    // how to get hte minimal length??
    let sum: number = 0;
    let i: number = 0;
    let result: number = +Infinity;
    for (let j: number = 0; j < nums.length; j ++) {
        sum += nums[j];
        while (sum >= target) {
            let subLength: number = j - i + 1;
            // keep updating result
            result = Math.min(result, subLength);
            sum -= nums[i];
            i ++;
        }
    }
    return result === +Infinity ? 0 : result;
};