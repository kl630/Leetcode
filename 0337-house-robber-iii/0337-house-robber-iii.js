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
var rob = function(root) {
    const traverse = (node) => {
        // 1. params: current node; 
        // and return value: return curNode[0] and curNode[1]
            // curNode[0] means the max value when not choosing node
            // curNode[1] means the max value when choosing node
        // 2. base case:
        let result = [0, 0];
        if (!node) return result;
        // 3. initialization
        // 4. traversal order: post order
        let left = traverse(node.left);
        let right = traverse(node.right);
        result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        result[1] = left[0] + right[0] + node.val;
        console.log('log result', result);
        return result;
    };
    
    let rootRes = traverse(root);
    return Math.max(rootRes[0], rootRes[1]);
};