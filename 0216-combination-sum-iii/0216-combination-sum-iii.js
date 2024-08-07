/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    let path = [];
    
    const getSum = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    };
    
    const backtracking = (k, n, startInt) => {
        if ((path.length === k) && getSum(path) === n) {
            result.push([...path]);
            return;
        } 
        
        if (path.length > k) return;
        
        if (getSum(path) > n) return;

        // k - path.length 
        // 9 - i + 1 < k - path.length 
        // i > path.length - k + 10
        for (let i = startInt; i <= path.length - k + 10; i++) {
            path.push(i);
            backtracking(k, n, i + 1);
            path.pop();
        }
        
        return result;
    };
    
    backtracking(k, n, 1);
    return result;
};