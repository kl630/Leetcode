function combine(n: number, k: number): number[][] {
    // backtracking
    let result: number[][] = [];

    function backtracking(n: number, k: number, startIndex: number, path: number[]): void {
        // 终止条件
        if (path.length === k) {
            result.push([...path]);
            return;
        }
        
        // 单层搜索 —— for循环横向遍历， 递归纵向遍历
        for (let i: number = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1, path);
            path.pop();
        }
    }

    backtracking(n, k, 1, []);
    return result;
};