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
var isValidBST = function(root) {
    // inorder traversal to get the node values in an array
    const traversal = (root, res) => {
        if (!root) return root;
        if (root.left) {
            traversal(root.left, res);
        }
        res.push(root.val);
        if (root.right) {
            traversal(root.right, res);
        }
    };
    let resultArr = [];
    traversal(root, resultArr);
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] >= resultArr[i+1]) {
            return false;
        }
    }
    return true;
};