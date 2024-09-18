
var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let char of word) {
        if (!node[char]) {
            return false; // If any character is missing, word is not in Trie
        }
        node = node[char]; // Move to the next node
    }
    return node.isEnd === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let char of prefix) {
        if (!node[char]) {
            return false; // If prefix is not present, return false
        }
        node = node[char]; // Move to the next node
    }
    return true; // Prefix exists in the Trie
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */