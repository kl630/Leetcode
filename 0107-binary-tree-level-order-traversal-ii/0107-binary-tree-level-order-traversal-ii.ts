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

function levelOrderBottom(root: TreeNode | null): number[][] {
    // the same as levelOrder, just reverse the result array
    let helperQueue: TreeNode[] = [];
    let res: number[][] = [];
    let tempArr: number[] = [];
    if (root !== null) {
        helperQueue.push(root);
    }
    
    while (helperQueue.length > 0) {
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            let curNode: TreeNode = helperQueue.shift();
            tempArr.push(curNode.val);
            if (curNode.left) {
            helperQueue.push(curNode.left);
            }
            if (curNode.right) {
            helperQueue.push(curNode.right);
            } 
        } 
        res.push(tempArr);
        tempArr= [];
    }
    return res.reverse();
};