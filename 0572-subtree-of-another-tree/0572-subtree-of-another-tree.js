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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // Nested recursion!!!
    // starting with isSameTree
    const isSameTree = (root1, root2) => {
        if (!root1 && !root2) {
            return true;
        } else if (!root1 || !root2) {
            return false;
        } else if (root1.val !== root2.val) {
            return false;
        }
        
        let leftRes = isSameTree(root1.left, root2.left);
        let rightRes = isSameTree(root1.right, root2.right);
        let res = leftRes && rightRes;
        return res;
    };
    
    // need to call "isSameTree" recursively on each node in root && just subRoot
    // need to traverse root tree
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    // left:
    let leftSubTree = isSubtree(root.left, subRoot);
    // right:
    let rightSubTree = isSubtree(root.right, subRoot);

    let result = leftSubTree || rightSubTree;
    return result;
};