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
var postorderTraversal = function(root) {
    // Recursion 3 Steps
    // 1. recursion function params and return value
    // (usually params are treenode and a result array to store the result. so return value is void)
    
    const traversal = (curNode, res) => {
        // post-order
        // left child -> right child -> curNode
        if (!curNode) return;
        traversal(curNode.left, res);
        traversal(curNode.right, res);
        res.push(curNode.val);
    };
    // 2. termination condition
    // if the curNode is null, return
    // 3. the logic on each traversal level
    let res = [];
    traversal(root, res);
    return res;
    
    // Recursive solution is trivial, could you do it iteratively?
};