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
var getMinimumDifference = function(root) {
    let pre = null;
    let minDiff = +Infinity;
    const traversal = (cur) => {
        // inorder: left -> middle -> right
        if (!cur) return;
        // left:
        traversal(cur.left);
        // middle:
        if (pre !== null) {
            let diff = Math.abs(cur.val - pre.val);
            minDiff = Math.min(minDiff, diff);
        }
        pre = cur;
        // right:
        traversal(cur.right);
    };
    traversal(root);
    return minDiff;
};