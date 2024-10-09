/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let path = []; // TODO: convert to string then push to result
    
    // backtracking but with limits
    const backtracking = (leftPar, rightPar) => {
        // 1. parmas: number of left (, and number of right ); return: void
        // the goal is to update result [] through backtracking
        // 2. base case
        if (leftPar === n && rightPar === n) {
            let pathStr = path.join('');
            result.push(pathStr);
            return;
        }
        
        // Make a decision
        // when can we add right parenthesis? when there is extra left parenthesis
        // when can we add left parenthesis? when cur number of left parenthesis is less than n
        if (leftPar < n) {
            path.push('(');
            leftPar++; // add a left parenthesis ** make a choice
            backtracking(leftPar, rightPar);
            path.pop();
            leftPar--; //** revoke that choice
        }
        
        if (leftPar > rightPar) {
            path.push(')');
            rightPar++;
            backtracking(leftPar, rightPar);
            path.pop();
            rightPar--;
        }
        
    };
    
    backtracking(0, 0);
    return result;
};