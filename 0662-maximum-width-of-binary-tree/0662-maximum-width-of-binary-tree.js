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
var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    
    let maxWidth = 0;
    let queue = [{ node: root, index: 0 }];
    
    while (queue.length > 0) {
        let levelLength = queue.length;
        let firstIndex = queue[0].index;
        let lastIndex = queue[levelLength - 1].index;
        
        // Calculate width for the current level
        maxWidth = Math.max(maxWidth, lastIndex - firstIndex + 1);
        
        for (let i = 0; i < levelLength; i++) {
            let { node, index } = queue.shift();
            index -= firstIndex; // Normalize the index
            
            if (node.left) {
                queue.push({ node: node.left, index: 2 * index });
            }
            if (node.right) {
                queue.push({ node: node.right, index: 2 * index + 1 });
            }
        }
    }
    
    return maxWidth;
};
