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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // post-order traversal
    const isSame = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1 && node2 && node1.val !== node2.val) return false;
        let outerRes = isSame(node1.left, node2.right);
        let innerRes = isSame(node1.right, node2.left);
        return outerRes && innerRes;
    };
    
    return isSame(root.left, root.right);
};