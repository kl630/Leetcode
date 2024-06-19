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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // pre-order traversal recursively? Give it a try
    // middle -> left child -> right child
    // can use invertTree function itself as the recursion function
    // 1. takes root param, return void
    // 2. termination condition: when the curNode is null, we return root
    // 3. logic at each traversal level
    // middle: swap left child and right child
    // left: call the invertTree function on the left child
    // right: call the invertTree function on the right child
    if (!root) return root;
    let tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};