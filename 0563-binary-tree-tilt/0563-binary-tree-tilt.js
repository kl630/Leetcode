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
    
    const postorder = (node) => {
        if (!node) return 0;
        
        // Postorder: left, right, node
        let leftSum = postorder(node.left);
        let rightSum = postorder(node.right);
        
        // Calculate tilt for the current node
        let tilt = Math.abs(leftSum - rightSum);
        totalTilt += tilt;
        
        // Return the sum of values in the subtree rooted at this node
        return node.val + leftSum + rightSum;
    };
    
    postorder(root);
    return totalTilt;
};
