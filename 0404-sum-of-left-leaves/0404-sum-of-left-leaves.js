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
var sumOfLeftLeaves = function(root) {
    // what is a left leaf?
    // (parent): node.left && !node.left.left && !node.left.right
    let result = 0;
    // traversal order: postorder?
    
    if (!root) return 0;
    if (root.left && !root.left.left && !root.left.right) {
        result += root.left.val;
    }
    result += sumOfLeftLeaves(root.left);
    result += sumOfLeftLeaves(root.right);
    
    return result;
};