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
    let result = [];
    let path = []; // TODO: convert path [] to a str with ->
    
    // Approach 1: traverse the entire tree can solve the problem
    const traverse = (node) => {
        if (!node) return;
        path.push(node.val);

        if (!node.left && !node.right) {
            result.push(path.join('->'));
            return;
        }
        // preorder: do some operation to the cur node
        if (node.left) {
            traverse(node.left);
            path.pop();
        }
        if (node.right) {
            traverse(node.right);
            path.pop();
        }
    };
    
    traverse(root);
    return result;
};