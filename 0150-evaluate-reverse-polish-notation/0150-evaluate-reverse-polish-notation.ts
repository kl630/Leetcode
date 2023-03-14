function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    for (let i of tokens) {
        if (!isNaN(parseInt(i, 10))) {
            stack.push(parseInt(i, 10));
        } else {
            let temp: number;
            if (i === '+') {
                temp = stack.pop() + stack.pop(); 
            }
            if (i === '-') {
                let elem1: number = stack.pop();
                temp = stack.pop() - elem1;
            }
            if (i === '*') {
                temp = stack.pop() * stack.pop();  
            }
            if (i === '/') {
                let elem1: number = stack.pop();
                temp = Math.trunc(stack.pop() / elem1);
            }
            stack.push(temp);
        }
    }
    return stack.pop();
};