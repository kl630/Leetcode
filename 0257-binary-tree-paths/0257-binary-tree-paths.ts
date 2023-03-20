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

function binaryTreePaths(root: TreeNode | null): string[] {
    // helper function
    function recur(node: TreeNode, route: string, resArr: string[]) : void {
        // termination condition ---- reach a leaf
        route += node.val.toString();
        if (node.left === null && node.right === null) {
            resArr.push(route);
            return;
        }
        if (node.left) {
            recur(node.left, route + '->', resArr);
        }
        if (node.right) {
            recur(node.right, route + '->', resArr);
        }
    }
    let resArr: string[] = [];
    recur(root, '', resArr);
    return resArr;
};