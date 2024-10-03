/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let result = [];
    let pre = null;
    let maxCount = -Infinity;
    let count;

    
    const traverse = (cur) => {

        if (!cur) return;
        // left
        traverse(cur.left);
        
        // middle
 
        if (pre === null) {
            count = 1;
        } else if (pre.val === cur.val) {
            count++; 
        } else if (pre.val !== cur.val) {
            count = 1;     
        }
        
        // Todo: > or >=??
        if (count === maxCount) {
            // maxCount = Math.max(maxCount, count);
            result.push(cur.val);
        } 
        if (count > maxCount) {
            // maxCount = Math.max(maxCount, count);
            // maxCount = count;
            result = [];
            result.push(cur.val);
        }
        pre = cur;
        maxCount = Math.max(maxCount, count);
        // right
        traverse(cur.right);
    };
    traverse(root);
    return result;
};