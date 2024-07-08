/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length < 1) return null;
    const rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal, null, null);
    const indexOfRootVal = inorder.indexOf(rootVal);
    const inorderLeftSubTree = inorder.slice(0, indexOfRootVal);
    const inorderRightSubTree = inorder.slice(indexOfRootVal + 1);
    postorder.pop();
    console.log('log postorder', postorder);

    const postorderLeftSubTree = postorder.slice(0, inorderLeftSubTree.length);
    const postorderRightSubTree = postorder.slice(inorderLeftSubTree.length);
    root.left = buildTree(inorderLeftSubTree, postorderLeftSubTree);
    root.right = buildTree(inorderRightSubTree, postorderRightSubTree);
    return root;
};