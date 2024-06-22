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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // helper function compare, takes two params, left child, right child 
    // return a boolean value
    // postorder traversal
    
    // You can do it! Just give it a try.
    const isSame = (leftNode, rightNode) => {
        // termination condition
        // Keren testing the return true part. Will test it out. Shouldn't return true.
        // should go to the next level of recursion.
        if( (leftNode === null) && (rightNode === null)) return true;
        if( (leftNode === null) && (rightNode !== null)) return false;
        if( (leftNode !== null) && (rightNode === null)) return false;
        if( (leftNode !== null) && (rightNode !== null) 
           && (leftNode.val !== rightNode.val)) return false;
        // if( (leftNode !== null) && (rightNode !== null) 
        //    && (leftNode.val === rightNode.val)) return;
        // left
        isSame(leftNode.left, rightNode.right);
        // right
        isSame(leftNode.right, rightNode.left);
        // middle
        let result = isSame(leftNode.left, rightNode.right) && isSame(leftNode.right, rightNode.left);
        return result;
    };
    
    return isSame(root.left, root.right);
};