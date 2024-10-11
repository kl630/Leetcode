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
    let maxRes = 0;
    // edge cases
    // when the root is null
    if (!root) return maxRes;
    
    const getOneDirectionLongestPath = (node) => {
        // getOneDirectionLongestPath 
        // 1. params: node. return: the longest path that ends at the cur node from either left or right subtree
        // 2. base case
        if (!node) return 0;
        // 3. recursive logic: at each node, return its getOneDirectionLongestPath(node) result to its parent node; at the same same, calculate the longest path that is through the current node, use this value to compare with global variable maxRes and update maxRes
        let leftLongestPath = getOneDirectionLongestPath(node.left);
        let rightLongestPath = getOneDirectionLongestPath(node.right);
        // how to refer to these 2 values?
        if (node.left && node.val === node.left.val) { // parent node value === left child's value
            leftLongestPath++;
        } else {
            leftLongestPath = 0
        }
        if (node.right && node.val === node.right.val) { // parent node value === right child's value
            rightLongestPath++;
        } else {
            rightLongestPath = 0;
        }
        maxRes = Math.max(maxRes, leftLongestPath + rightLongestPath);
        return Math.max(leftLongestPath, rightLongestPath);
    };
    
    getOneDirectionLongestPath(root);
    return maxRes;
};