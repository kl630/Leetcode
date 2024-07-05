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
    // as long as we traverse left before right
    let result;
    let maxDepth = -Infinity;
    const traversal = (root, depth) => {
        if (!root) return;
        if (depth > maxDepth) {
            maxDepth = depth;
            result = root.val;
        }
        if (root.left) {
            depth ++;
            traversal(root.left, depth);
            depth --;
        }
        if (root.right) {
            depth ++;
            traversal(root.right, depth);
            depth --;
        }
    };
    
    traversal(root, 0, result);
    return result;
};