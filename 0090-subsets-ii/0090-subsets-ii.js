/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // fist need to sort nums array
    let result = [];
    let path = [];
    let sortedNums = nums.sort((a, b) => a - b);
    
    const backtracking = (startIndex) => {
        // 1. params:  and return value: void (we update result [])
        // we need startIndex, so we won't have duplicates [1, 2] and [2, 1]
        result.push([...path]);
        // 2. termination condition: there is no termination condition actually. 
        // the goal is to collect every node on the tree. the for loop below will naturally end.
        // 3. logic at each recursion level
        // e.g. [1, 2, 2, 3]
        for (let i = startIndex; i < sortedNums.length; i++) {
            if (i !== startIndex && sortedNums[i] === sortedNums[i-1]) { // tree-level deduplication
                continue;
            } 
            //else { // TODO: Do we need else here??
                path.push(sortedNums[i]);
                backtracking(i+1);
                path.pop();
            
            
        }   
    };
 
    backtracking(0);
    return result;
};