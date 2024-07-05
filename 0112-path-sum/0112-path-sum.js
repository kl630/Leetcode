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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const traversal = (root, count) => {
        if (root.left === null && root.right === null && count === 0) return true;
        if (root.left === null && root.right === null && count !== 0) return false;
        if (root.left) {
            count -= root.left.val;
            if (traversal(root.left, count)) return true;
            count += root.left.val;
        }
        if (root.right) {
            count -= root.right.val;
            if (traversal(root.right, count)) return true;
            count += root.right.val;
        }
        return false;
    };
    if (!root) return false;
    return traversal(root, targetSum - root.val);
};