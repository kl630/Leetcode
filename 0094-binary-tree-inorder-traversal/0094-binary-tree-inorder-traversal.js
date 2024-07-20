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
    const traversal = (cur, res) => {
        if (!cur) return;
        traversal(cur.left, res);
        res.push(cur.val);
        traversal(cur.right, res);
    };
    
    let result = [];
    traversal(root, result);
    return result;
};