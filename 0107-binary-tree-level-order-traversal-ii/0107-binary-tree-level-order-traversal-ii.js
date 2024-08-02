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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    if (!root) return res;
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        console.log('log queue', queue);
        let curLevel = [];
        let size = queue.length;
        while (size--) {
            let cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
            curLevel.push(cur.val);
            console.log('log curLevel', curLevel);
        }
        res.push(curLevel);
        console.log('log res', res);
    }

     console.log('outside loop-log res', res);

    return res.reverse();
};