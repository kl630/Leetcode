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
var sumNumbers = function(root) {
    // TODO: Edge cases: 1. given root is null
    
    // has to be root -> left node
    let result = 0; // an integer
    let path = []; // e.g. [1, 2], [4, 9, 5]
    // use an example
    // path = [4, 9, 5]
    // []
    // TODO: [4, 9, 5] => number: 495
    const traverse = (node) => {
        // 1. params: node;  and return value: void
            // the goal is to update path and use it to update result
        // 2. base case:
        // when the cur node is null
        if (!node) return;
        path.push(node.val);

        // when we reach a leaf node: !! We need to add the current leaf node
        // to the path [] first!!!
        if (!node.left && !node.right) {
            // we found a path
            // transform path [] -> Number
            let pathStr = path.join('');
            console.log('log path', path);
            let pathNum = Number(pathStr);
            // add the number to result 
            result += pathNum;
        }
        // 3. TODO: logic at each recursion level
        // traversal order: preorder
        // middle
        // left
        traverse(node.left);
        // right
        traverse(node.right);
        path.pop();
    };
    
    traverse(root);
    return result;
};