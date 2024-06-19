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
var postorderTraversal = function(root) {
    // Recursively first
    // postorder: left child -> right child -> middle
    // Recursion 3 Steps
    // 1. define recursion helper function's params and return value
    const traversal = (root, res) => {
        if (!root) return;
        // left child
        traversal(root.left, res);
        // right child
        traversal(root.right, res);
        // middle
        res.push(root.val);
    };
    // 2. termination condition
    // 3. logic at each traversal level
    let result = [];
    traversal(root, result);
    return result;
    
    // Then iteratively
};