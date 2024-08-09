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

    const traversal = (node, path) => {
        // pre-order traversal
        // need to reach the leaf nodes
        path.push(node.val);

        if (node && node.left === null && node.right === null) {
            let pathStr = path.join('->');
            // result.push([...path].join('->'));
            result.push(pathStr);
            // return;
        }
        
        if (node.left) {
            traversal(node.left, path);
            path.pop();
        }
        if (node.right) {
            traversal(node.right, path);
            path.pop();
        }
    };
    
    traversal(root, []);
    return result;
};