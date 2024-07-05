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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // pre-order traversal
    const traversal = (root, path, res) => {
        path.push(root.val);
        if (root.left === null && root.right === null) {
            let pathString = path.join('->');
            res.push(pathString);
        }
        if (root.left) {
            traversal(root.left, path, res);
            path.pop();
        }
        if (root.right) {
            traversal(root.right, path, res);
            path.pop();
        }
    };
    let result = [];
    traversal(root, [], result);
    return result;
};