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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // helper function: return void
    const traversal = (root, count, path, res) => {
        if (root.left === null && root.right === null && count === 0) {
            res.push([...path]);
        }
        if (root.left) {
            path.push(root.left.val);
            traversal(root.left, count - root.left.val, path, res);
            path.pop();
        }
        if (root.right) {
            path.push(root.right.val);
            traversal(root.right, count - root.right.val, path, res);
            path.pop();
        }
    };
    
    let result = [];
    let path = [];
    if (!root) return result;
    path.push(root.val);
    traversal(root, targetSum - root.val, path, result);
    return result;
};