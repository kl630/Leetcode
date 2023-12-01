function search(nums: number[], target: number): number {
    // O(log n): binary search
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.ceil((left + right) / 2);
        if (nums[middle] === target) return middle;
        else if (nums[middle] < target) {
            left = middle + 1;
        } else if (nums[middle] > target) {
            right = middle - 1;
        }
    }
    return -1;
};