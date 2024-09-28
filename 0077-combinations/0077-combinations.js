/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // TODO: Pruning!
    let result = [];
    let path = [];
    
    const backtracking = (n, k, startInt) => {
        // 1. params and return value: void
        // 2. base case
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        // 3. logic at each recursion level
        for (let i = startInt; i <= n; i++) {
            path.push(i);
            backtracking(n, k, i+1);
            path.pop();
        }
    };
    
    backtracking(n, k, 1);
    return result;
};