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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    // TODO: do inorder traversal iteratively
    let minDiff = +Infinity;
    let stack = [];
    let cur = root;
    let pre = null;
    
    while (stack.length > 0 || cur !== null) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if (pre !== null) {
            let curDiff = cur.val - pre.val;
            minDiff = Math.min(minDiff, curDiff);
        }
        pre = cur;
        
        cur = cur.right;
    }
    
    return minDiff;
};