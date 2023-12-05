function sortedSquares(nums: number[]): number[] {
    let res: number[] = [];
    let left: number = 0;
    let right: number = nums.length - 1;
    while (left <= right) {
        let leftVal = nums[left] ** 2;
        let rightVal = nums[right] ** 2;
        if (leftVal < rightVal) {
            res.unshift(rightVal);
            right --;
        } else {
            res.unshift(leftVal);
            left ++;
        }
    }
    return res;
};