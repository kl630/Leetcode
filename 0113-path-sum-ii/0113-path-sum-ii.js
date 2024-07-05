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
        path.push(root.val);
        if (root.left === null && root.right === null && count === 0) {
            res.push([...path]);
        }
        if (root.left) {
            traversal(root.left, count - root.left.val, path, res);
            path.pop();
        }
        if (root.right) {
            traversal(root.right, count - root.right.val, path, res);
            path.pop();
        }
    };
    
    let result = [];
    if (!root) return result;
    traversal(root, targetSum - root.val, [], result);
    return result;
};