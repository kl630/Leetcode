/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let path = [];
    // 1. recursion function (backtracking) params and return value;
    // params: n, k, startIndex
    // return: void
    const backtracking = (n, k, startIndex) => {
        // 2. termination condition
        if (path.length === k) {
            result.push([...path]);
            // result.push(path);
            return;
        }
        // 3. logic at each recursion level
        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
    };
    
    backtracking(n, k, 1);
    return result;
};