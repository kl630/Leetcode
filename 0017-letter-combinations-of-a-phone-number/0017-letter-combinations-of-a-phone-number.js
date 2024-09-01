var letterCombinations = function(digits) {
	let result = [];
	if (digits.length === 0) return result;
	let path = [];
    const dict = {
        '2': [ 'a', 'b', 'c' ], 
        '3': [ 'd', 'e', 'f' ], 
        '4': [ 'g', 'h', 'i' ], 
        '5': [ 'j', 'k', 'l' ],  
        '6': [ 'm', 'n', 'o' ], 
        '7': [ 'p', 'q', 'r', 's' ], 
        '8': [ 't', 'u', 'v' ], 
        '9': [ 'w', 'x', 'y', 'z' ], 
    };

    const backtracking = (index) => {
        // termination condition
    if (path.length === digits.length) {
        let pathStr = path.join('');
        result.push(pathStr);
        return;
    }
        
    let characters = dict[digits[index]];
    for (let i = 0; i < characters.length; i++) {
        path.push(characters[i]);
        backtracking(index + 1);
        path.pop();
    }	
    };

    backtracking(0);
    return result;    
};
