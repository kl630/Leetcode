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
    // if there is no left subtree, we need to go to the right side to find the min depth
    // vice versa
    let res = 0;
    if (!root) return res;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    // postorder traversal
    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    res = Math.min(leftHeight, rightHeight) + 1;
    return res;
};