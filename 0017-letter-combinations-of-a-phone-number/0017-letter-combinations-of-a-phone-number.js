/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let res = [];
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
        // 1. params and return vale
        // elems: e.g. '23'; 
        // length: the length of the combination; 
        // elemIndex
        
        // 2. termination condition
        if (targetLen === 0) return; 
        if (path.length === targetLen) {
            res.push(path);
            return;
        }
        if (elemIndex >= elems.length) return;
        // 3. logic at each recursion level
        // first need to do the lookup
        // Character access
        // There are two ways to access an individual character in a string. The first          is the charAt() method:
        console.log('log elemIndex', elemIndex);

        let characters = dict[elems[elemIndex]];
        console.log('log characters', characters);

        for (let i = 0; i < characters.length; i++) {
            console.log('log characters[i]', characters[i]);

            path = path.concat(characters[i]);
            console.log('log before-path', path);
            backtracking(digits, digits.length, elemIndex + 1)
            // Can string to .pop()? No!!!
            path = path.slice(0, path.length - 1);
            console.log('log after-path', path);
        }        
    };
    
    backtracking(digits, digits.length, 0);
    return res;
};