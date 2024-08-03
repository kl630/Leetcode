/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let path = [];
    
    const backtracking = (n, k, startIndex) => {
        // With Pruning

            
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
        
    };
    
    backtracking(n, k, 1);
    return result;
};