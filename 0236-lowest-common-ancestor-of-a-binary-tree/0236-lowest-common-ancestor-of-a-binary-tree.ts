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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	function traverse(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode {
        if (root === null || root === p || root === q) return root;
        let left: TreeNode | null = traverse(root.left, p, q);
        let right: TreeNode | null = traverse(root.right, p, q);
        if (left !== null && right !== null) return root;
        if (left === null) return right;
        if (right === null) return left;
    }
    return traverse(root, p, q);
};