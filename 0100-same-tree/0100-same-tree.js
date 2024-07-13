/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // traversing 2 trees at the same time
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    }
    
    // left:
    let leftRes = isSameTree(p.left, q.left);
    // right:
    let rightRes = isSameTree(p.right, q.right);
    // middle:
    let res = leftRes && rightRes;
    return res;
};