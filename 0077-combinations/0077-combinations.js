/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let path = [];
    
    // Pruning!!
    // e.g. n = 4, k = 4
    // startIndex 
    const backtracking = (n, k, startIndex) => {
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        // n - i + 1 + path.length < k---> need to stop
        // i > n + path.length - k + 1
        
        for (let i = startIndex; i <= n + path.length - k + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        } 
    };
    
    backtracking(n, k, 1);
    return result;
};