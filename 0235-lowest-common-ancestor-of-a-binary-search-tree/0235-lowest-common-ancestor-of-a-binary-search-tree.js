/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    const minVal = Math.min(p.val, q.val);
    const maxVal = Math.max(p.val, q.val);
    if (root.val < minVal) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (root.val > maxVal) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val >= minVal && root.val <= maxVal) {
        return root;
    }
};