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
var countNodes = function(root) {
    let result = 0;
    if (!root) return result;
        
    // how to check if a complete tree is a FULL tree?
    // leftmost node's depth === rightmost node's depth
        
    const getLeftDepth = (root) => {
        // return: the depth of the deepest leftmost node to the root;
        if (!root) return 0;
        
        let depth = 1;
        while (root.left) {
            root = root.left
            depth++;
        }
        return depth;
    };
    
    const getRightDepth= (root) => {
         // return: the depth of the deepest rightmost node to the root;
        if (!root) return 0;
        
        let depth = 1;
        while (root.right) {
            root = root.right
            depth++;
        }
        return depth;
    };
    
    if (getLeftDepth(root) === getRightDepth(root)) {
        result = Math.pow(2, getLeftDepth(root)) - 1;
    } else {
        let left = countNodes(root.left);
        let right = countNodes(root.right);
        result = left + right + 1;
    }
    // If the the complete tree is a FULL tree,
        // then great! number of tree nodes = 2 ^ depth - 1
    
    // if it is not full: total num = left num + right num + 1
        // then examine its left subtree
        // If the the complete tree is a FULL tree,
            // then great! number of tree nodes = 2 ^ depth - 1
        // If it's not full, examine its left subtree and right subtree....
        
    // and right subtree
       // If the the complete tree is a FULL tree,
            // then great! number of tree nodes = 2 ^ depth - 1
        // If it's not full, examine its left subtree and right subtree....
   // Base case: we are at a leaf node --- total sum = left num + right num + 1; and here left num and right num are both 0
    // So, base case is the cur node is null, total sum = 0

    return result;
};