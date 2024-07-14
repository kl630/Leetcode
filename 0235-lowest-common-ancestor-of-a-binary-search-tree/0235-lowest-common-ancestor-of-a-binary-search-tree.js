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
    // due to the unique property of a BST, the LCA's value must be between p and q's values
    if (!root) return null;
    // postorder traversal: left -> right -> middle
    
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // return root;
    if ((root.val >= p.val && root.val <= q.val) || (root.val >= q.val && root.val <= p.val)) {
        return root;
    }
};