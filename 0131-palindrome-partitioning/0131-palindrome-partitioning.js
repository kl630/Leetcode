/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    //    a               a      b
    // a|ab             aa|b    aab|
    // a|a|b OR a|ab|
    
    // startIndex, endIndex = startIndex + 1, startIndex+2, ....until it exceeds
    // the length of s. Limit: when endIndex <= s.length
    
    // for curStr, e.g. a| ab|, 'ab' is not a palindrome, stop this path right away
    let result = [];
    let path = [];
    
    const isPalindrome = (str) => {
        // return boolean
        let arr = str.split('');
        let reversedArr = arr.reverse();
        return reversedArr.join('') === str;
    };
    
    const backtracking = (startIndex) => {
        // base case:
        // When to push cur path to result[]
        if (startIndex === s.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = startIndex; i < s.length; i++) {
            let curStr = s.slice(startIndex, i+1);
            if (isPalindrome(curStr)) {
                path.push(curStr);
                backtracking(i+1);
                path.pop();
            }
        }
        
    };
    backtracking(0);
    return result;
};