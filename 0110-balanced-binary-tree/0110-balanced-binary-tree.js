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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // while we are traversing the tree, we are doing 2 things
    // check if the current subtree is imbalanced already
    // if it is already imbalanced, no need to calculate its height
    // *** so we can propagate "-1" up to parent node
    // if it is balanced, calculate its height
    // Propagate above 2 info up to the parent node
    const traverse = (node) => {
        // 1. params: node. return value: void. it updates result.// NO! it needs a return value!! so that at middle node, we can compare results from left and right subtrees
        // 2. base case
        if (!node) return 0;
        
        
        // 3. TODO: recursive logic
        // Traversal order: postorder
        // left
        let left = traverse(node.left);
        if (left === -1) {
            return -1;
        }
        // right
        let right = traverse(node.right);
        if (right === -1) {
            return -1;
        }
        // middle 
        if (Math.abs(right - left) > 1) {
            return -1;
        } else {
            return Math.max(left, right) + 1;
        }
    };
    
   
    return traverse(root) !== -1;
};