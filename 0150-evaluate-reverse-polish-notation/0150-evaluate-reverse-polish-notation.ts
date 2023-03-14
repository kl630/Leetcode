function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    for (let i of tokens) {
        if (!isNaN(parseInt(i, 10))) {
            console.log('current i', i);
            stack.push(parseInt(i, 10));
        } else {
            let elem1: number = stack[stack.length - 1];
            let elem2: number = stack[stack.length - 2];
 
            let temp: number;
            if (i === '+') {
                temp = elem2 + elem1;
                console.log('+', temp);
            }
            if (i === '-') {
                temp = elem2 - elem1;
            }
            if (i === '*') {
                temp = elem2 * elem1;
            }
            if (i === '/') {
                temp = Math.trunc(elem2 / elem1);
            }
            stack.pop();
            stack.pop();
            stack.push(temp);
        }
    }
    // now there should be only one element left in the stack, return stack.pop()
    console.log(stack);
    return stack.pop();
};