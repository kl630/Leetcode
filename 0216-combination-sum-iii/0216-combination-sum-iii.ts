function combinationSum3(k: number, n: number): number[][] {
    // only numbers 1 through 9 are used
    let result: number[][] = [];
    // backtracking function
    function backtracking(k: number, n: number, startIndex: number, path: number[]): void {
        if (path.length === k && path.reduce((a, b) => a + b, 0) === n) {
            result.push([...path]);
            return;
        }
        
        for (let i: number = startIndex; i <= 9; i++) {
            path.push(i);
            backtracking(k, n, i + 1, path);
            path.pop();
        }
    }
    // invoke backtracking function
    backtracking(k, n, 1, []);
    return result;
};