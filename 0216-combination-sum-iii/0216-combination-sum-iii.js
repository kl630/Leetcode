/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // With Pruning
    const getSum = (arr) => {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
        }
        return res;
    };
    // k is the length of the path []; n is the target sum
    let result = [];
    let path = [];
    // similar to #77 - combination but with a requirement on the combination sum
    
    // recursion function: 
    const backtracking = ( k, startIndex, n) => {
        // 1. params: k, startIndex; and return value: void
        // 2. termination condition
        if (path.length === k && getSum([...path]) === n) {
            result.push([...path]);
            return;
        }
        // 3. logic at each recursion level  
        for (let i = startIndex; i <= 9; i++) {
            if (getSum([...path]) > n) {
                return;
            } else {
                path.push(i);
                backtracking(k, i + 1, n);
                path.pop();    
            }

        }
    };

    backtracking(k, 1, n);
    return result;
};