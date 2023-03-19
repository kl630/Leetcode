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

function inorderTraversal(root: TreeNode | null): number[] {
    function traverse(node: TreeNode, res: number[]): void {
        if (node === null) return;
        traverse(node.left, res);
        res.push(node.val);
        traverse(node.right, res);
    };
    const res: number[] = [];
    traverse(root, res);
    return res;
};