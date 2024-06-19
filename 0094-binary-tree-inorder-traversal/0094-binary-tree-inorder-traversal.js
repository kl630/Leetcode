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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // inorder: left child -> middle -> right child
    
    // Recursively first
    const traversal = (curNode, res) => {
        if (!curNode) return;
        traversal(curNode.left, res);
        res.push(curNode.val);
        traversal(curNode.right, res);
    };
    
    let result = [];
    traversal(root, result);
    return result;
    // TODO: Iteratively
    // maybe the while loop for this one needs two conditions? We'll see
};