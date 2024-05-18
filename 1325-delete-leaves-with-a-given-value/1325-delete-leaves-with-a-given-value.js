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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    // ** Recursion 3 Steps **
    // 1. determine the params and return value of the recursive function
    // root of the binary tree 'root', and the target value 'target'
    // 2. determine the base case
    // when the current node is null, 
    // we simpty return null because there is nothing to process
    // 3. determine the logic for one recursive step
    
    if (!root) return null;
    // we would use post-order traversal
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    
    // if current node is a left node && has the target value
    if (!root.left && !root.right && root.val === target) {
        // then we remove it
        return null;
    }
    return root;
};