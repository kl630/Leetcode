function removeElement(nums: number[], val: number): number {
    // need to modify the original nunms array
    // fast pointer, slow pointer
    // [0, 1, 2, 2, 3, 0, 4, 2]
    let slow: number = 0;
    let fast: number = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow ++;
        }
        fast ++;
    }
    return slow;
};