/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let curRes;
    // loop through tokens array
    for (let elem of tokens) {
        // if cur elem is an integer
        if (!isNaN(elem)) {
            // push it to the helper stack
            stack.push(Number(elem));
        } else {
        // if we see an operator
            // pop out the 2 integers before it
            let secondInt = stack.pop();
            let firstInt = stack.pop();  // ** order matters
            // operate on 2 integers and get a curRes
            if (elem === '+') {
                curRes = firstInt + secondInt;
            } else if (elem === '-') {
                curRes = firstInt - secondInt;    
            } else if (elem === '*') {
                curRes = firstInt * secondInt;
            } else if (elem === '/') {
                curRes = Math.trunc(firstInt / secondInt);
            }
            // The division between two integers always truncates toward zero.
            // push curRes to the stack
            stack.push(curRes);
        }
    }
    // final result is the only elem left on the stack
    return stack[0];
};
