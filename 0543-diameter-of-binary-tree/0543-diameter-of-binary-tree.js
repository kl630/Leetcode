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
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    // create a helper function
    // param: a node
    // return: the depth of the node
    // also, update the diameter global variable, 
    // which is the max value of left depth + right depth in the entire tree
    const getDepth = (node) => {
        if (!node) return 0;
        let leftDep = getDepth(node.left);
        let rightDep = getDepth(node.right);
        let curDiameter = leftDep + rightDep;
        diameter = Math.max(diameter, curDiameter);
        return Math.max(leftDep, rightDep) + 1;
    };
    
    getDepth(root);
    return diameter;
};