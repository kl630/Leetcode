function decodeString(s: string): string {
    // use stack
    
    // whenever we have a full [] combination, we need to process it
    // Or to simply, whenever we see a ']', we pop out all characters after '['
    // and we call those characters elemCandidates
    // then we pop out all the valid interger before that '['
    // and we call that number numOfRep
    // operate on numOfRep and elemCandidates, call its result as curRes
    // push curRes back to the stack
    
    // e.g. stack = ['   3 [ a c c  '], now we have a ']'
    // pop out 'c' , now we have a '[' // TODO: if there are multiple characters, we need to reverse letter combinations ''
    let stack = [];

    
    for (let i = 0; i < s.length; i++) {
        let elemCandidates = []; // TODO: reverse the order and convert to strings
        let numOfRep = [];  // TODO: reverse the order and convert to a number
        if (s[i] === ']') {
            // TODO: process elements before, but after '['
            while (stack[stack.length - 1] !== '[') {
                let cur = stack.pop();
                elemCandidates.push(cur); 
            }
            stack.pop();
            // elemCandidates = ['c', 'c', 'a']
            let elems = elemCandidates.reverse().join(''); // e.g. 'acc' 
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) { // Keren question: '3' ?? isNaN() ?? how to handle it
                numOfRep.push(stack.pop());
            }
            // numOfRep = ['3']
            let repetitions = Number(numOfRep.reverse().join('')); // e.g. 3 - Number
            let curRes = elems.repeat(repetitions)//  operate on elemCandidates and numOfRep
            // Question: does repeat() work on strings?
            stack.push(...curRes.split(''));
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
};