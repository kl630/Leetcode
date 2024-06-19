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
    // let's do it recursively
    // pre-order: middle -> left -> right
    // Idea: can we use preorderTraversal itself? instead of defining a new traverse recursion helper function?
    
    // Recursive 3 Steps
    // 1. define recursion function's params and return value
    // usually params are treeNode and a res array to store node values; and return void
    const traversal = (root, res) => {
        if (!root) return;
        res.push(root.val);
        if (root.left) {
            traversal(root.left, res);
        }
        if (root.right) {
            traversal(root.right, res);
        }
    };
    // 2. determine termination condition
    // when the current node is null, return;
    
    // 3. determine the logic at each traversal level
    // middle: push the middle node's value into the res array
    // left: call recursion function on the left child
    // right: call recursion function on the right child
    let result = [];
    traversal(root, result);
    return result;
    
    // Keren TODO: then let's do it iteratively
};