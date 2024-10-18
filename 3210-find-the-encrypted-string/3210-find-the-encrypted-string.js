/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    if (k % s.length === 0) return s;
    // if k = 3, new string will start from s[k]
    // new string will be composed of 2 parts - string from index k to end + string from index 0 to index k
    // e.g. s = "dart", k = 3
    // new String = 't' + 'dar'
    
    // if k >= s.length,
    // if k === s.length, no change
    let numberOfOpe = k % s.length;
    let firstPart = s.slice(numberOfOpe);
    let secondPart = s.slice(0, numberOfOpe);
    // process k --- modula
    let result = firstPart.concat(secondPart);
    return result;
};