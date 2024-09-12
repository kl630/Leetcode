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
    
    const isSame = (root1, root2) => {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        if (root1 && root2 && root1.val !== root2.val) return false;
        
        // post-order traversal
        // left -> right -> middle
        let leftRes = isSame(root1.left, root2.left);
        let rightRes = isSame(root1.right, root2.right);
        let result = leftRes && rightRes;
        return result;
    };
    if (!root) return false;
    if (isSame(root, subRoot)) return true;
    let left = isSubtree(root.left, subRoot);
    let right = isSubtree(root.right, subRoot);
    return left || right;
};