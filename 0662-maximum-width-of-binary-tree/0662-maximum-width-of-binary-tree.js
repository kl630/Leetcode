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
    // node and index
    let maxWidth = 0;
    let queue = [];
    queue.push({ node: root, index: 0});
    
    while (queue.length > 0) {
        let size = queue.length;
        let firstNodeIndex = queue[0].index;
        let lastNodeIndex = queue[size - 1].index;
        curWidth = lastNodeIndex - firstNodeIndex + 1;
        maxWidth = Math.max(maxWidth, curWidth);
        
        while (size--) {
            let { node, index } = queue.shift();
            // index = 0;
            index -= firstNodeIndex;
            
            if (node.left) {
                queue.push({ node: node.left, index: index * 2 });
            }
            if (node.right) {
                queue.push({ node: node.right, index: index * 2 + 1 });
            }
        }
    }
    
    return maxWidth;
};