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
    let result = 0;
    if (!root) return result;
    
    const traversal = (node) => {
        if (!node) return 0;
        let leftSum = traversal(node.left);
        let rightSum = traversal(node.right);
        result += Math.abs(leftSum - rightSum);
        
        return leftSum + rightSum + node.val;
    };
    
    traversal(root);
    return result;
};