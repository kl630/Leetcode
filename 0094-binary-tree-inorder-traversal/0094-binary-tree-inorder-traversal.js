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
    // inorder: left child -> middle -> right child
    
    // TODO: Iteratively
    let res = [];
    if (!root) return res;
    
    let cur = root;
    let stack = [];
    while (stack.length > 0 || cur !== null) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }  else {
            // here cur is null, (we went too far)
            // so we update it properly to the parent node of the initial node (back to previous parent node)
            cur = stack.pop();
            res.push(cur.val);
            if (cur.right) {
                cur = cur.right;
            } else {
                cur = null;
            }
            // cur = cur.right;
            console.log('log res', res);
        }

    }
    return res;
    // maybe the while loop for this one needs two conditions? We'll see
};