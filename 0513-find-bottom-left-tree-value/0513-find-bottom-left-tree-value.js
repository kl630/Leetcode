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
    // Keren TODO: tree-level traversal(iteratively) seems like a good solution
    
    // But will try with recursive approach first
    // preorder traversal: middle -> left -> right
    // the goal is to find the deepest leaf node
    // if cannot find one on the left side, then go to the right side. 
    // Therefore, traversal order doesn't really matter 
    // as long as we traverse left before right
    let maxDepth = -Infinity;
    let result = null;
    
    const traversal = (root, depth) => {
        if (root === null) return;
        if (root.left === null && root.right === null) {
            if (depth > maxDepth) {
                maxDepth = depth;
                result = root.val;
            }
        }
        if (root.left) {
            traversal(root.left, depth + 1);
        }
        if (root.right) {
            traversal(root.right, depth + 1);
        }
    };
    
    traversal(root, 0);
    return result;
};