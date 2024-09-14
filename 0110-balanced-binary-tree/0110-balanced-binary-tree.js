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
    // Question: why do we need getHeight helper function? can't we just use the isBalanced function itself. whenever we found an inbalanced subtree, we can return false.
    
    // balanced - height diff between left subtree and right subtree <= 1
    // post-order traversal: left -> right -> middle
    // if it's > 1, return -1 to indicate that the tree is already inbalanced
    const getHeight = (root) => {
        let result = 0;
        if (!root) return result;
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        if (leftHeight === -1 || rightHeight === -1) {
            return -1;
        }
        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        } else {
            result = Math.max(leftHeight, rightHeight) + 1;
        }
        return result;
    };
    
    
    return getHeight(root) !== -1;
};