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
var findTilt = function(root) {
    let totalTilt = 0;

    const getSum = function(node) {
        if (!node) return 0;
        return node.val + getSum(node.left) + getSum(node.right);
    };

    const postorder = function(node) {
        if (!node) return;
        
        postorder(node.left);
        postorder(node.right);
        
        let leftSum = getSum(node.left);
        let rightSum = getSum(node.right);
        
        totalTilt += Math.abs(leftSum - rightSum);
    };

    postorder(root);
    return totalTilt;
};
