/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    // leveraging height === depth;
    // we will use postorder traversal to calculate height instead
    // choose the lesser one
    // special case: if the root has only one chid, we shouldn't just return 1 as its min depth
    // we still need to go to the other child and find its min depth instead
    // down to the nearest leaf node
    let res = 0;
    if (!root) return res;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    let leftHeight = minDepth(root.left);
    let rightHeight = minDepth(root.right);
    res = Math.min(leftHeight, rightHeight) + 1;
    
    return res;
};