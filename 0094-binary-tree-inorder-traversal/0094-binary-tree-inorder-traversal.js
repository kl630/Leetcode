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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [];
    let result = [];
    // left -> middle -> right
    if (!root) return result;
    let cur = root;
    
    while (stack.length || cur) {
        while (cur) {
        stack.push(cur);
        cur = cur.left;
        }
        
        cur = stack.pop(); 
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
};