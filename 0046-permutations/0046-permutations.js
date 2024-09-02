var permute = function(nums) {
    let result = [];
    let path = [];

    const backtracking = (choicesArr)  => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
    }
    for (let i = 0; i < choicesArr.length; i++) {
        path.push(choicesArr[i]);
        let arrCopy = [...choicesArr];
        arrCopy.splice(i, 1);
        console.log('log arrCopy after deletion', arrCopy);
        backtracking(arrCopy);
        path.pop();
    }
    };

    backtracking(nums);
    return result;
};
