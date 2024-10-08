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
var longestUnivaluePath = function(root) {
    let result = 0;

    // Using a recursive function within longestUnivaluePath itself
    function longestPath(node) {
        if (!node) return 0;

        // Calculate the longest path for the left and right children
        let left = longestPath(node.left);
        let right = longestPath(node.right);

        let leftPath = 0, rightPath = 0;

        // If the left child has the same value as the current node, extend the path
        if (node.left && node.left.val === node.val) {
            leftPath = left + 1;
        }

        // If the right child has the same value as the current node, extend the path
        if (node.right && node.right.val === node.val) {
            rightPath = right + 1;
        }

        // Update the global result, considering paths going through the current node
        result = Math.max(result, leftPath + rightPath);

        // Return the longest path going down from the current node
        return Math.max(leftPath, rightPath);
    }

    // Call the recursive function starting at the root
    longestPath(root);

    return result;
};
