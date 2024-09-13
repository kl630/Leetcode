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
    const traversal = (root) => {
        if (!root) return;
        
        result.push(root.val);
        traversal(root.left);
        traversal(root.right);
    };
    traversal(root);
    return result;
    // TODO: 2. iteratively- stack
    
    
};