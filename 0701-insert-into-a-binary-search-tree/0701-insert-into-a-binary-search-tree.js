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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val);
    if (!root) return newNode;
    if (root.val < val) {
        root.right = insertIntoBST(root.right, val);
    } else if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } 
    return root;
};