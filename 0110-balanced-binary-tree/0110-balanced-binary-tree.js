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
    // height -> postorder traversal
    // Recursion 3 Steps
    // 1. recursion function getHeight params: root; return: integer
    // 2. termination condition: 
    // if the cur node is null. return 0
    // 3. logic at each traversal level
    // left: leftHeight = getHeight(root.left)
    // need to check if leftHeight === -1, if it is already -1, aka 'imbalanced', then
    // need to pass it onto the parent node
    // right: same thing for right and right height
    // middle: check the height difference between leftHeight and rightHeight. if it is 
    // larger than 1, it means they are imbalanced, so the height is  -1;
    // else, it is the Math.max(leftHeight, rightHeight) + 1
    const getHeight = (treeNode) => {
        if (treeNode === null) return 0;
        let leftHeight = getHeight(treeNode.left);
        if (leftHeight === -1) return -1;
        let rightHeight = getHeight(treeNode.right);
        if (rightHeight === -1) return -1;
        let res;
        if (Math.abs(leftHeight - rightHeight) > 1) {
            res = -1;
        } else {
            res = Math.max(leftHeight, rightHeight) + 1;
        }
        return res;
    };
    
   let result = getHeight(root);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
    
    
};