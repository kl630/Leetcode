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
    // postorder traversal
    if (!root) return null;
    if (root === p || root === q) return root;
    
    let leftRes = lowestCommonAncestor(root.left, p, q);
    let rightRes = lowestCommonAncestor(root.right, p, q);
    
    if (leftRes && rightRes) {
        return root
    } else if (leftRes && !rightRes) {
        return leftRes
    } else if (!leftRes && rightRes) {
        return rightRes;
    }
};