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
var largestValues = function(root) {
    // similar to tree level traversal
    // just need to get the max value in each curLevel array
    let res = [];
    if (!root) {
        return res;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let max = -Infinity;
        while (size--) {
            let cur = queue.shift();
            max = Math.max(max, cur.val);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
        res.push(max);
    }
    return res;
};