/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // const traverse = (root1, root2) => {
        let newRoot = new TreeNode();

        // pre-order traversal: middle -> left -> right
        if (!root1 && !root2) return null;
        // middle
        if (!root1) {
            return root2;
        }
        if (!root2) {
            return root1;
        }
        if (root1 && root2) {
            newRoot.val = root1.val + root2.val;
        }
        // left
        newRoot.left = mergeTrees(root1.left, root2.left);
        // right
        newRoot.right = mergeTrees(root1.right, root2.right); 
   // console.log('log newRoot', newRoot);
        return newRoot;
//     };
 
//     return traverse(root1, root2);
};