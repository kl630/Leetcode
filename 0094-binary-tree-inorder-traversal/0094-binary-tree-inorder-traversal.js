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
var inorderTraversal = function(root) {
    // Recursive solution is trivial, could you do it iteratively?
    let stack = [];
    let res = [];

    // pointer to keep track of which node we are currently visiting
    let cur = root;
    // when to terminate the while loop: when the cur node is null && the stack is empty
    // so the condtion for while loop is (cur node is not null || the stack is not empty)
    while (cur !== null || stack.length > 0) {
        // while we are visiting the node, we use stack to store them
        if (cur !== null) {
            // this if block achieves the effect of going all the way down to the left
            stack.push(cur);
            cur = cur.left;    
        } else {
            // here we reach the very left node all the way down
            // where its left child is null (the cur node, which is null)
            // we need to re-fetch the not-null node, pop it from the stack and work on it with the res array
            // re-define the cur node
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
};