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
var getMinimumDifference = function(root) {
    let minDiff = +Infinity;
    let pre = null;
    // Question: Can I define curDiff inside traverse helper function??
    
    const traverse = (cur) => {
        if (!cur) return;
        // left -> middle -> right
        
        // left:
        traverse(cur.left);
        
        // middle:
        let curDiff;

        if (pre !== null) {
            curDiff = cur.val - pre.val;
            minDiff = Math.min(minDiff, curDiff);
        }
        pre = cur;
        
        // right:
        traverse(cur.right);
    };
    
    traverse(root);
    return minDiff;
};