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
        
        // if( (leftNode !== null) && (rightNode !== null) 
        //    && (leftNode.val === rightNode.val)) return;
        
        // Above: Shouldn't return true or anything.
        // it should go to the next level of recursion.
        
        // But below is definitely a termination condition. That's how we find the ultimate result.
        if( (leftNode === null) && (rightNode === null)) return true;
        if( (leftNode === null) && (rightNode !== null)) return false;
        if( (leftNode !== null) && (rightNode === null)) return false;
        if( (leftNode !== null) && (rightNode !== null) 
           && (leftNode.val !== rightNode.val)) return false;

        // outer
        let outer = isSame(leftNode.left, rightNode.right);
        // inner
        let inner = isSame(leftNode.right, rightNode.left);
        // middle
        let result = outer && inner;
        return result;
    };
    
    return isSame(root.left, root.right);
};