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

function levelOrder(root: TreeNode | null): number[][] {
    let helperQueue: TreeNode[] = [];
    let res: number[][] = [];
    let tempArr: number[] = [];
    if (root !== null) helperQueue.push(root);
    
    let curNode: TreeNode;
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            curNode = helperQueue.shift();
            tempArr.push(curNode.val);
            if (curNode.left) {
                helperQueue.push(curNode.left);
            }
            if (curNode.right) {
                helperQueue.push(curNode.right);
            }
        }
        res.push(tempArr);
        tempArr = [];
    }
    return res;
};