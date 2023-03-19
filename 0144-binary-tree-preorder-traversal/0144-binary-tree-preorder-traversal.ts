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

function preorderTraversal(root: TreeNode | null): number[] {
    function traverse(node: TreeNode, res: number[]): void {
        if (node === null) return;
        res.push(node.val);
        traverse(node.left, res);
        traverse(node.right, res);
    };
    const res: number[] = [];
    traverse(root, res);
    return res;
};