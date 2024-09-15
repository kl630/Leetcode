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
var findBottomLeftValue = function(root) {
    let result;
    let maxHeight = - Infinity;
    // postorder: left -> right -> middle
    // the deepest(highest) and the leftmost leaf node (doesn't have to be the left leaf)
    const traverse = (root, height) => {
        if (!root.left && !root.right) {
            if (height > maxHeight) {
                maxHeight = height;
                result = root.val;
            }
        }
        
        // left
        if (root.left) {
            traverse(root.left, height + 1);
        }
        // right
        if (root.right) {
            traverse(root.right, height + 1);
        }
            
    };
        
    traverse(root, 0);
    return result;
};