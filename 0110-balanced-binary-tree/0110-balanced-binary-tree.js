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
var isBalanced = function(root) {
    // postorder traversal
    // if not balanced, return -1
    const getHeight = (root) => {
        let result = 0;
        if (!root) return result;
        // left
        let leftHeight = getHeight(root.left);
        // right
        let rightHeight = getHeight(root.right);
        // middle
        if (leftHeight === -1 || rightHeight == -1) return -1;
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        result = Math.max(leftHeight, rightHeight) + 1;
        return result;
    };
    
    return getHeight(root) !== -1;
};