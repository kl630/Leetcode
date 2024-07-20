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
var preorderTraversal = function(root) {
    // middle -> left -> right
    const traversal = (cur, res) => {
        if (!cur) return;
        res.push(cur.val);
        traversal(cur.left, res);
        traversal(cur.right, res);
    };  

    let result = [];
    traversal(root, result);
    return result;
};