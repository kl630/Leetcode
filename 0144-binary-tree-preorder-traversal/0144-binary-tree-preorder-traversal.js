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
var preorderTraversal = function(root) {
    // Recursion 3 Steps
    // 1. determine the recursion function's parameters and return value    
    // usually params are root and result [] to store the node values;
    // usually return void because we will already store the value we want in params
    // params: cur (current node), res []
    // return: void

    // 2. determine the termination condition
    // when the current node is null, we will return
    // 3. define the logic on each recursion level
    // middle node: res.push(cur.val)
    // left child: traversal(cur.left, res)
    // right child: traversal(cur.right, res)

    const traversal = (cur, res) => {
        if (!cur) return;
        res.push(cur.val);
        traversal(cur.left, res);
        traversal(cur.right, res);
    };
    let res = [];
    traversal(root, res);
    return res;
};