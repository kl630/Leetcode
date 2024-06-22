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
 * @return {number}
 */
var maxDepth = function(root) {
    // we will calculate height instead because height === depth
    // when calculating height, we use postorder traversal
    
    // helper recursion function: getHeight
    // params: node
    // return integer(height)
    // Keren TODO: maybe we can use maxDepth function itself?
    // const getHeight = () => {

    // };
    let res = 0;
    if (!root) return res;
    // termination condition: node is null, height is 0
    // left: get the height of left subtree
    // right:  get the height of right subtree
    // middle: get the result from left and right => whichever is larger, 
    // that would be the max depth of the level below that middle node
    // and the height of that certain middle node will be the result aforementioned + 1
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    res = Math.max(leftHeight, rightHeight) + 1;
    return res;
}