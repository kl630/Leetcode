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
var countNodes = function(root) {
    // postorder traversal
    // consider it has a normal tree first
    // Recursion 3 Steps
    // 1. recursion function's params and return value
    // param: node and return an integer (number of tree nodes)
    // 2. termination condition
    // if the current node is null, return 0;
    if (!root) return 0;
    // 3. logic at each traversal level
    // left child: 
    let left = countNodes(root.left);
    // right child:
    let right = countNodes(root.right);
    // middle:
    let res = left + right + 1;
    return res;
    
    // then leverage complete tree's special properties
};