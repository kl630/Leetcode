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

function getMinimumDifference(root: TreeNode | null): number {
    // inorder traversal
    function traverse(node: TreeNode | null, res: number[]): void {
        if (node === null) return;
        // left
        traverse(node.left, res);
        // middle
        res.push(node.val);
        // right
        traverse(node.right, res);
    }

    // get the result array- ascending order
    let res: number[] = [];
    traverse(root, res);
    console.log(res);
    // loop through the array, keep track of the absolute difference between each two adjacent elements
    let minimum: number = +Infinity;
    for (let i = 0; i < res.length - 1; i++) {
        let diff: number = Math.abs(res[i] - res[i+1]);
        minimum = Math.min(minimum, diff);
    }
    // return the minimum difference
    return minimum;
};