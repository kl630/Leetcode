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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    if (!root) return result;
    
    let path = [];
    
    const traverse = (root, curCount) => {
        // 2. termination condition
        // if (reached a leaf node) AND (curCount === 0) 
        // collect current path to the result []
        if (!root.left && !root.right && curCount === 0) {
            result.push([...path]);
            return;
        }
        
        if (root.left) {
            curCount -= root.left.val;
            path.push(root.left.val);
            traverse(root.left, curCount);
            curCount += root.left.val;
            path.pop();
        }
        
        if (root.right) {
            curCount -= root.right.val;
            path.push(root.right.val);
            traverse(root.right, curCount);
            curCount += root.right.val;
            path.pop();
        }      
    };
    path.push(root.val);
    traverse(root, targetSum - root.val);
    return result;
};