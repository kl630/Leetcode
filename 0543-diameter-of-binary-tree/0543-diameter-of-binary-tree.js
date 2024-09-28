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
var diameterOfBinaryTree = function(root) {
    // diameter is NOT the width of a tree
    // it's the max number of edges
    // how to get number of edges for a certain node?
        // leftSubtree's depth + righSubtree's depth
    // max number of edges: traverse the entire tree and find the max
    let result = 0;
    
    const getDepth = (root) => {
        if (!root) return 0;
        // left -> right -> middle
        let leftDepth = getDepth(root.left);
        let rightDepth = getDepth(root.right);
        result = Math.max(result, leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    };
    
    getDepth(root);
    return result;
};