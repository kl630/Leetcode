function removeDuplicates(s: string): string {
    // create a stack []
    let stack: string[] = [];
    // loop through the input string s
    for (let i of s) {
        if (i === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    // then we get the record stack--- e.g. ['c', 'a']
    return stack.join('');
    
        // if the current element === the top element on the stack
            // pop the top element on the stack
        // else 
            // push the current element into the stack
    // we need to pop each element out and reverse their order
};