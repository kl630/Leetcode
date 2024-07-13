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
    // traversing two trees at the same time: postorder
    
    // helper function isSame returns a boolean value
    const isSame = (leftNode, rightNode) => {
        if (!leftNode && !rightNode) {
            return true;
        } else if (!leftNode || !rightNode) {
            return false;
        } else if (leftNode.val !== rightNode.val) {
            return false;
        } 
        // left:
        let outer = isSame(leftNode.left, rightNode.right);
        // right:
        let inner = isSame(leftNode.right, rightNode.left);
        // middle:
        let res = outer && inner;
        return res; 
    };
    
    return isSame(root.left, root.right);
};