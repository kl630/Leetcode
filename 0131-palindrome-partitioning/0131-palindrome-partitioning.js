/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // 'aab'
    let result = [];
    let path = [];
    
    const isPalindrome = (str) => {
        return str.split('').reverse().join('') === str;
    };
    

    
    const backtracking = (startIndex) => {
        if (startIndex === s.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = startIndex; i < s.length; i++) {
            let cutPart = s.slice(startIndex, i + 1);
            let restPart = s.slice(startIndex + 1, s.length);
            
            if (isPalindrome(cutPart)) {
                path.push(cutPart);
                backtracking(i + 1);
                path.pop();
            }    
        }
    };
    
    backtracking(0);
    return result;
};