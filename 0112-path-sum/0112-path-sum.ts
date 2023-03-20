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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // helper function
    function recur(node: TreeNode, sum: number) : boolean {
        if (!node.left && !node.right && sum === 0) return true;
        if (!node.left && !node.right && sum !== 0) return false;
        if (node.left) {
            sum -= node.left.val;
            if (recur(node.left, sum)) return true;
            sum += node.left.val;
        }
        if (node.right) {
            sum -= node.right.val;
            if (recur(node.right, sum)) return true;
            sum += node.right.val;
        }
        return false;
    }
    if (root === null) return false;
    return recur(root, targetSum - root.val);
};