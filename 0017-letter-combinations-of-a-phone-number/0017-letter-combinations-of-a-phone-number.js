/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
    if (digits.length === 0) return res;
    
    let path = '';
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
    const backtracking = (elems, targetLen, elemIndex) => {
        if (elemIndex === targetLen) {
            res.push(path);
            return;
        }
        let characters = dict[elems[elemIndex]];
        for (let i = 0; i < characters.length; i++) {
            path = path.concat(characters[i]);
            backtracking(elems, targetLen, elemIndex + 1);
            path = path.slice(0, path.length - 1);
        }
    };
    
    backtracking(digits, digits.length, 0);
    return res;
};