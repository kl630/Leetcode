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
var maxDepth = function(root) {
    let result = 0;
    // 1. params: node, return value: void, we update result while traversing
    // 2. base case
    if (!root) return result;
    // 3. recursive logic
    // traversal order: post order
    // left
    let left = maxDepth(root.left);
    // right
    let right = maxDepth(root.right);
    // middle
    result = Math.max(left, right) + 1;
    
    return result;  // an integer
};