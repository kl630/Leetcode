// function findSubsequences(nums: number[]): number[][] {
// 	let result = [];
// 	let path = [];

// 	const backtracking = (startIndex) => {
// 		// termination condition
//  		// when the length of path >= 2 AND path doesn’t already exist in result array
//         // !result.includes([...path])
//         // !result.indexOf(path)
        
// 		// if (path.length >= 2) {
// 		// console.log('log path', path);
// 		// 	result.push([...path]);
// 		// 	return;
// 		// }
//         const isInResult = (pathArr, resultArr) => {
//             for (let i = 0; i < resultArr.length; i++) {
//                 let resultElem = resultArr[i];
//                 if (resultElem.join('') === pathArr.join('')) {
//                     return true;
//                 }
//             }
//             return false;
//         };
        
// 		for (let i = startIndex; i < nums.length; i++) {
// 			if (path.length === 0 || nums[i] >= path[path.length - 1]) {
// 				path.push(nums[i]);
//                 if (path.length >= 2 && !isInResult(path, result)) {
//                     result.push([...path]);
//                 }
// 				backtracking(i + 1);
// 				path.pop();
//             }	
//         }	
//     };

//     backtracking(0);
//     return result;
// };
function findSubsequences(nums: number[]): number[][] {
    let result = new Set<string>();
    let path: number[] = [];

    const backtracking = (startIndex: number) => {
        if (path.length >= 2) {
            // Convert the path to a string and add it to the set to avoid duplicates
            result.add(path.join(','));
        }

        for (let i = startIndex; i < nums.length; i++) {
            // Skip duplicate elements in the same recursive level
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            
            // Ensure the current element maintains the non-decreasing order
            if (path.length === 0 || nums[i] >= path[path.length - 1]) {
                path.push(nums[i]);
                backtracking(i + 1);
                path.pop();
            }
        }
    };

    backtracking(0);

    // Convert the set of stringified paths back to an array of arrays
    return Array.from(result).map(seq => seq.split(',').map(Number));
}


