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
    // inorder: left child -> curNode -> right child
    const traversal = (curNode, res) => {
        if (!curNode) return;
        traversal(curNode.left, res);
        res.push(curNode.val);
        traversal(curNode.right, res);
    };
    
    let res = [];
    traversal(root, res);
    return res;
};