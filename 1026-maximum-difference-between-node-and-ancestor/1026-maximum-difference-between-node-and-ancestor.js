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
var maxAncestorDiff = function(root) {
    // TODO: where should i put maxDiff? Global or in bfs function?
    let maxDiff = - Infinity;
    
    const bfs = (node, curMin, curMax) => {
        if (!node) return;
        
        if (node.val > curMax) {
            curMax = node.val;
        }
        
        if (node.val < curMin) {
            curMin = node.val
        }
        
        // go to left side
        bfs(node.left, curMin, curMax);
        // go to right side
        bfs(node.right, curMin, curMax);
        
        // TODO Solution 2: return maxDiff
        maxDiff = Math.max(maxDiff, curMax - curMin);
    };
    
    // TODO Solution 2: return bfs(root, root.val, root.val);
    bfs(root, root.val, root.val);
    return maxDiff;
};