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
var preorderTraversal = function(root) {
    // TODO: 1. recursively
    // pre-order: middle -> left -> right
    let result = [];
    if (!root) return result;
    result.push(root.val);
    result = result.concat(preorderTraversal(root.left));
    
    result = result.concat(preorderTraversal(root.right));
    
    return result;
    // TODO: 2. iteratively- stack
    
    
};