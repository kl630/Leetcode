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

function rightSideView(root: TreeNode | null): number[] {
    // Another thought: curNode = curNode.right?? ---this is not correct
    // it wants the last element in each layer, not necessary the element on the right side of the tree.
    // e.g. if root = [1, 2, null, 1], it should return [1, 2, 1]
    
    let helperQueue: TreeNode[] = [];
    let res: number[] = [];
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
        res.push(tempArr[tempArr.length - 1]);
        // tempArr = [];
    }
    return res;
};