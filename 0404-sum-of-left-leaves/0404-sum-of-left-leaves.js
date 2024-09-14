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
    let result = 0;
    // what is a left leaf?
    // it is a left node and it is the left child of its parent node
    // if (root && root.left && !root.left.left && !root.left.right)
    const traverse = (root) => {
        // traversal order? pre-order: middle -> left -> right
        if (!root) return;
        if (root.left && !root.left.left && !root.left.right) {
            result += root.left.val;
        }
        // middle: ???
        // left
        traverse(root.left);
        // right
        traverse(root.right);
    };
    // TODO: ??can I just use sumOfLeftLeaves function
    traverse(root);
    return result;
};