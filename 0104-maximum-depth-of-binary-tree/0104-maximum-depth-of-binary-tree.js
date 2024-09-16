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
var maxDepth = function(root) {
    // post-order traversal: left -> right -> middle
    // TODO: use a helper function
//     let result = 0;
//     if (!root) return result;
    
//     const traverse = (root) => {
//         if (!root) 
//     };
    
//     traverse(root);
//     return result;
    // TODO: try just using maxDepth function itself
    if (!root) return 0;
    
    let leftRes = maxDepth(root.left);
    let rightRes = maxDepth(root.right);
    
    let result = Math.max(leftRes, rightRes) + 1;
    return result;
};