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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // Keren TODO: 2 ways
    
    let result = [];
    let path = [];
    
    const traverse = (root) => {
        if (!root) return;
        
        if (!root.left && !root.right) {
            let strPath = path.join('->');
            result.push(strPath);
            return;
        }
        
        if (root.left) {
            path.push(root.left.val);
            traverse(root.left);
            path.pop();
        }
        
        if (root.right) {
            path.push(root.right.val);
            traverse(root.right);
            path.pop();
        }
    };
    path.push(root.val);
    traverse(root);
    return result;
};