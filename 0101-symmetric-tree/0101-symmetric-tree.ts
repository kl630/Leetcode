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

function isSymmetric(root: TreeNode | null): boolean {
    function compare(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null && right !== null) return false;
        else if (left !== null && right === null) return false;
        else if (left === null && right === null) return true;
        else if (left.val !== right.val) return false;
        else if (left.val === right.val) {
            return compare(left.left, right.right) && compare(left.right, right.left);
        }
    };
    if (root === null) return true;
    return compare(root.left, root.right);
};