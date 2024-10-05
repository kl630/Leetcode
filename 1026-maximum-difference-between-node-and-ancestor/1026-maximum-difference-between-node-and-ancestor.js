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
    
    const bfs = (node, curMin, curMax) => {
        if (!node) return curMax - curMin;
        
        if (node.val > curMax) {
            curMax = node.val;
        }
        
        if (node.val < curMin) {
            curMin = node.val
        }
        
        // go to left side
        let leftRes = bfs(node.left, curMin, curMax);
        // go to right side
        let rightRes = bfs(node.right, curMin, curMax);
        
        // TODO Solution 2: return maxDiff
       return Math.max(leftRes, rightRes);
    };
    
    // TODO Solution 2: return bfs(root, root.val, root.val);
     return  bfs(root, root.val, root.val);
  
};