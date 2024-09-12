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
    // depth === height
    const getHeight = (root) => {
        if (!root) return 0;
        // post-order traversal
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        // This is wrong!!
        // let result = Math.min(leftHeight, rightHeight) + 1;
        if (!root.left) {
            return rightHeight + 1;
        }
        if (!root.right) {
            return leftHeight + 1;
        }
        return Math.min(leftHeight, rightHeight) + 1;
    };
    
    return getHeight(root);
};