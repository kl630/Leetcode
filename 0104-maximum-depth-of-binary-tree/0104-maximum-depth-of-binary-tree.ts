/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    // depth === height
    if (root === null) return 0;
    let leftHeight: number = maxDepth(root.left); 
    let rightHeight: number = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};