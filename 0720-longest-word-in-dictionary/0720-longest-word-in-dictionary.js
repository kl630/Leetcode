/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    // sort array words first
    // e.g. sortedWords = 
    // ["banana","apple","apply", "appl","app","ap","a"]
    let result = '';
    const sortedWords = words.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log('log sortedWords', sortedWords);
    // helper function
    const canBeBuilt = (word, dict) => {
        let i = word.length - 1;
        while (i > 0) {
            let curWord = word.slice(0, i);
            // 'a' i = 0
            if (dict.includes(curWord)) {
                i--;
            } else {
                return false;
            }  
        }
        if (i === 0) {
            return true;
        }
    };
    
    for (let word of words) {
        if (canBeBuilt(word, words)) {
            result = word;
            return result;
        }
    }
    return result;
};