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
    // post-order traversal
    if (!root) return null;
    if (root === p || root === q) {
        return root;
    }
    // left
    let leftRes = lowestCommonAncestor(root.left, p, q);
    // right
    let rightRes = lowestCommonAncestor(root.right, p, q);
    
    // you store the results (leftRes and rightRes) and then perform the LCA checks afterward.
    // middle
    if (leftRes && rightRes) {
        return root;
    }
    if (leftRes && !rightRes) {
        return leftRes;
    }
    if (!leftRes && rightRes) {
        return rightRes;
    }

};