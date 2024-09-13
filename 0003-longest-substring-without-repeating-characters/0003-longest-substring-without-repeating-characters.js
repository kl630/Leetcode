/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    if (s.length === 0) return result;
    
    let left = 0;
    let record = new Set();
    for (let right = 0; right < s.length; right++) {
        while (record.has(s[right])) {
            // delete left pointer's elem
            record.delete(s[left]);
            // left++
            left++;
        }
        // if s[right] doesn't exist in record Set
        // add it to the record
        record.add(s[right]);
        result = Math.max(result, right - left + 1);
    }
    
    return result;
};