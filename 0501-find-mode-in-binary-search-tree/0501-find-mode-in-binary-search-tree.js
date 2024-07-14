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
    let pre = null;
    let count = 0;
    let maxCount = 0;
    let result = [];
    
    const traversal = (cur) => {
        if(!cur) return;
        // left:
        traversal(cur.left);
        // middle:
        if (!pre) {
            count = 1;
        } else if (pre.val === cur.val) {
            count ++;
        } else if (pre.val !== cur.val) {
            count = 1;
        }
        
        if (count === maxCount) {
            result.push(cur.val);  
        }
        if (count > maxCount) {
            maxCount = count;
            result = [];
            result.push(cur.val);
        }
        pre = cur;
        // right:
        traversal(cur.right);
    };
    
    traversal(root);
    return result;
};