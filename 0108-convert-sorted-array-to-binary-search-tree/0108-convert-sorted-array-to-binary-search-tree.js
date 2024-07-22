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
var sortedArrayToBST = function(nums) {
    if (nums.length < 1) return null; 
    let middleIndex = Math.floor(nums.length / 2);
    let middleElem = nums[middleIndex];
    let root = new TreeNode(middleElem);
    let leftSub = nums.slice(0, middleIndex);
    let rightSub = nums.slice(middleIndex + 1);
    root.left = sortedArrayToBST(leftSub);
    root.right = sortedArrayToBST(rightSub);
    return root;
};