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
var findMode = function(root) {
    let pre = null;
    let count = 0;
    let maxCount = 0;
    let result = [];
    const traversal = (cur) => {
        // inorder: left -> middle -> right
        // base case:
        if (!cur) return;
        
        // left:
        traversal(cur.left);
        // middle:
        if (pre === null) {
            count = 1;
        } else if (pre !== null && pre.val === cur.val) {
            count++;
        } else if (pre !== null && pre.val !== cur.val) {
            count = 1;
        }
        pre = cur;

        if (count === maxCount) {
            maxCount = count;
            result.push(cur.val);
        }
        if (count > maxCount) {
            result = [];
            maxCount = count;
            result.push(cur.val);
        }
        
        // right:
        traversal(cur.right);
    };
    traversal(root);
    return result;
};