var subsetsWithDup = function(nums) {
    let result = [];
    let path = [];    
    // result.push([...path]);

    const backtracking = (startIndex) => {
    // no need for termination condition
        result.push([...path]);

        let sortedNums = nums.sort((a, b) => a - b);
        for (let i = startIndex; i < sortedNums.length; i++) {
            if (i > startIndex && sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }
            path.push(sortedNums[i]);
            backtracking(i + 1);
            path.pop();
        }
    };

    backtracking(0);
    return result;
};
