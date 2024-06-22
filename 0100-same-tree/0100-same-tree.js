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
    // Keren question: Why can't we use preorder traversal? 
    
    // traversing two trees at the same time
    // we can just use isSameTree function : params: p and q; return: boolean value
    // termination condition
    // node from tree p && node from tree q: only one of them is null: return false
    // both are null: return true
    // both are not null, && values are different, return false
    if (p === null && q === null) return true;
    if (p !== null && q === null) return false;
    if (p === null && q !== null) return false;
    if (p !== null && q !== null && p.val !== q.val) return false; 

    
    // logic at each traversal level
    // postorder traversal: 
    // left
    let leftSide = isSameTree(p.left, q.left);
    // right
    let rightSide = isSameTree(p.right, q.right);
    // middle
    let result = leftSide && rightSide;
    return result;
};