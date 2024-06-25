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
    // helper recursion function getPaths(treeNode, path, result)
    // termination condition: when reaching the leaf node, then push current path
    // to the result array
    const getPaths = (treeNode, path, result) => {
        path.push(treeNode.val);
        if (treeNode.left === null && treeNode.right === null) {
            let pathString = path.join("->");
            result.push(pathString);
        }
        if (treeNode.left) {
            getPaths(treeNode.left, path, result);
        }
        if (treeNode.right) {
            getPaths(treeNode.right, path, result);
            
        }
        path.pop();
    };
    // traversal order: preorder
    // middle
    // left
    // right
    
    // * backtracking * !!!
    let path = [];
    let res = [];
    getPaths(root, path, res);
    return res;
};