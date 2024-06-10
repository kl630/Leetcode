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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // Recursive solution is trivial, could you do it iteratively?
    
    // pre-order is starting from root, then push in the right child, then left child
    // post-order can be derived from pre-order and make some tweaks
    // instead, we push in the left child first, then right child, so that we get
    // mid-> right child -> left child
    // then reverse the entire result so we get : left child -> right child -> mid,
    // which is exactly post-order traversal
    let stack = [];
    let res = [];
    if (!root) return res;
    stack.push(root);
    while (stack.length > 0) {
        // Keren: by doing pop(), the stack will be modified already
        let cur = stack.pop();
        res.push(cur.val);
        if (cur.left) {
            stack.push(cur.left);
        }
        if (cur.right) {
            stack.push(cur.right);
        }
    }
    // reverse the res array
    return res.reverse();
};