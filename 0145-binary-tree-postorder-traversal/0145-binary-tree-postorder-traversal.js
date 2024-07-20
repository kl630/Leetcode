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
var postorderTraversal = function(root) {
    // left -> right -> middle
    const traversal = (cur, res) => {
        if (!cur) return;
        if (cur.left) {
            traversal(cur.left, res);
        }
        if (cur.right) {
            traversal(cur.right, res);
        }
        res.push(cur.val);
    };
    
    let result = [];
    traversal(root, result);
    return result;
};