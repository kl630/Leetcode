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
    let maxDiff = -Infinity;

    const traverse = (node, curMin, curMax) => {
        // Keren TODO: when to define it in helper recursion function?
        // vs. when to define it as global variable
        // 1. params: TODO; and return value: void, update maxDiff

        // also need a curMin and curMax
        // 2. base case
        if (!node) return;
        // 3. recursive logic
        // preorder
        // middle
        curMin = Math.min(curMin, node.val);
        curMax = Math.max(curMax, node.val);
        // e.g. root is 8, now we are here, curMin = 8, curMax = 8
        // left
        traverse(node.left, curMin, curMax); // here, curMin and curMax got reset again if curMin and curMax are defined inside helper function
        // when curMin and curMax are defined as global variables
        // still has reference to pre curMin and curMax
        // curMin = 3, curMax = 8,
        
        // Keren TODO: minDiff in BST?? vs. Mode in BST
        // right
        traverse(node.right, curMin, curMax); // this way, when we start traversing to root.right, we will always compare to the root node
        maxDiff = Math.max(maxDiff, curMax - curMin);
    };
    
    traverse(root, root.val, root.val);
    return maxDiff;
};