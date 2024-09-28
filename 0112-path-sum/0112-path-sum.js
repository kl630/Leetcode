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
    // post-order traversal?
    
    const traverse = (root, curCount) => {
        // 1. params and return value: true or false
        // 2. base case
        // if (!root) return;
        if (!root.left && !root.right && curCount === 0) {
            return true;
        } else if (!root.left && !root.right && curCount !== 0) {
            return false;
        }
        // 3. logic at each recursion level
        if (root.left) {
            if (traverse(root.left, curCount - root.left.val)) {
                return true;
            }
        }
        if (root.right) {
            if (traverse(root.right, curCount - root.right.val)) {
                return true;
            }
        } 

        return false;
    };
    if (!root) return false;
    return traverse(root, targetSum - root.val);
};