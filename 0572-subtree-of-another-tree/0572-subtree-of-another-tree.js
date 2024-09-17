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
    // helper function isSame
    const isSame = (root1, root2) => {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        if (root1 && root2 && root1.val !== root2.val) return false;
        
        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    };
    
    // then recursively call isSame ?? on each node of root (tree1)
    if (!root) return false;
    if (isSame(root, subRoot)) {
        return true;
    }
    let result = isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    return result;
};