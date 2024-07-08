/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length < 1) return null;
    const maxVal = [...nums].sort((a, b) => { return b - a; })[0];
    let root = new TreeNode(maxVal, null, null);
    let indexOfMaxVal = nums.indexOf(maxVal);
    let leftSubArray = nums.slice(0, indexOfMaxVal);
    let rightSubArray = nums.slice(indexOfMaxVal + 1);
    root.left = constructMaximumBinaryTree(leftSubArray);
    root.right = constructMaximumBinaryTree(rightSubArray);
    return root;

};