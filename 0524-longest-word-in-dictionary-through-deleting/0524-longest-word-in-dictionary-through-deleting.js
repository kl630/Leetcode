/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    let result = '';
    // helper function
    const isSubstring = (s, word) => {
        let i = 0;
        let j = 0;
        while (i < word.length && j < s.length) {
            if (word[i] === s[j]) {
                i++;
            }
            j++;
        }
        if (i === word.length) {
            return true;
        }
        return false;
    };
    
    
    const sortedDict = dictionary.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        }
        return a.localeCompare(b);
    });
                                           
    console.log('log sortedDict', sortedDict);
    // sortedDict [ 'monkey', 'apple', 'plea', 'ale' ]
    for (let word of sortedDict) {
        if (isSubstring(s, word)) {
            result = word;
            return result;
        }
    }
    return result;
};