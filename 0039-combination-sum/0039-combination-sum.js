/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const getSum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    };
    // [2, 3, 6, 7]   [2, 3, 6, 7]    [2, 3, 6, 7]    [2, 3, 6, 7]    [2, 3, 6, 7] 
    // no limit on the path length
    // any distinct integer can be used as many times as wanted
    let result = [];
    let path = [];
    
    const backtracking = (integers, startIndex) => {
        if (getSum(path) === target) {
            result.push([...path]);
            return;
        }
        
        if (getSum(path) > target) return;
        
        for (let i = startIndex; i < integers.length; i++) {
            path.push(integers[i]);
            backtracking(integers, i);
            path.pop();
        }
    };
    
    backtracking(candidates, 0);
    return result;
};