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
var minDepth = function(root) {
    let result = 0;
    if (!root) return result;
    if (!root.left) {
        return minDepth(root.right) + 1;
    }
    if (!root.right) {
       return minDepth(root.left) + 1;
    }
    // postorder traversal
    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    result = Math.min(leftHeight, rightHeight) + 1;
    return result;
};