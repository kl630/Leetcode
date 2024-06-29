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
var sumOfLeftLeaves = function(root) {
    // can use the sumOfLeftLeaves function itself as the recursion function
    // postorder traversal
    // 1. recursion function's params: root and return value: result as an integer
    // 2. termination condition
    if (root === null) return 0;
    // 3. logic at each traversal level ---- postorder traversal
    // left:
    let leftSum = sumOfLeftLeaves(root.left);
    if (root.left && root.left.left === null && root.left.right === null) {
        leftSum = root.left.val;
    }
    // right: 
    let rightSum = sumOfLeftLeaves(root.right);
    // middle:
    let res = leftSum + rightSum;
    return res;
};