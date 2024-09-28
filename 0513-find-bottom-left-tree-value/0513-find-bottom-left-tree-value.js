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
    // in the last row: need to keep track of depth
    // it has to be the deepest level and the first node on that level
    // traversal order: postorder??
    let result = null;
    let maxDepth = -Infinity;
    // 1. recursion fucntion params and return void
    const traverse = (root, curDepth) => {
        // return leftmost value
        if (!root) return;
        // 2. base case
        if (curDepth > maxDepth) {
            maxDepth = curDepth;
            result = root.val;
        }
        
        traverse(root.left, curDepth + 1);
        traverse(root.right, curDepth + 1);
    };

    // 3. logic at each recursion level
    traverse(root, 0);
    return result;
};