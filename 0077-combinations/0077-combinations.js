/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let path = [];
    
    // TODO: trimming!!
    
    const backtracking = (n, k, startInteger) => {
        // Backtracking 3 Steps
        // 1. define backtracking helper function: params: n, k, startInteger, and return value: void
        // 2. termination condition
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        // 3. 回溯搜索的遍历过程 logic at each traversal level
        for (let i = startInteger; i <= n; i++) {
            path.push(i);
            backtracking(n, k, i+1);
            path.pop();
        }
    };
    
    backtracking(n, k, 1);
    return result;
};