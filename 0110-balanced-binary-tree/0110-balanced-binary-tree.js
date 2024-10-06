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
    // recursion: traverse the entire tree
    // left -> right -> middle
    
    // TODO: how to get leftHeight and rightHeight?
    // create a helper function getHeight()
    const getHeight = (node) => {
        if (!node) return 0;
        let left = getHeight(node.left);
        let right = getHeight(node.right);
        let res = Math.max(left, right) + 1;
        return res;
    };
    // if at any node, if leftSubTree and rightSubtree's height diff > 1
        // return false
    if (!root) return true;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    if (Math.abs(rightHeight - leftHeight) > 1) {
        return false;
    }
    
    let leftRes = isBalanced(root.left);
    let rightRes = isBalanced(root.right);
    return leftRes && rightRes;
};