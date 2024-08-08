/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // const getSum = (arr) => {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i];
    //     }
    //     return sum;
    // };
    // no limit on the target path length
    // each elem in the given array can only be used once
    let result = [];
    let path = [];
    
    const backtracking = (integers, startIndex, sum) => {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) return;
        // e.g. [2,5,2,1,2]
        const sortedIntegers = integers.sort((a, b) => a - b);
        for (let i = startIndex; i < sortedIntegers.length; i++) {
            if ((i > startIndex) && sortedIntegers[i] === sortedIntegers[i - 1]) {
                continue;
            }
            path.push(sortedIntegers[i]);
            sum += sortedIntegers[i];
            backtracking(sortedIntegers, i + 1, sum);
            path.pop();
            sum -= sortedIntegers[i];
        }
    };
    
    backtracking(candidates, 0, 0);
    return result;
};