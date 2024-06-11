/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // instead of binary tree, it's an N-ary tree
    // cool!
    // instead of node.left and node.right
    // it's node.children. Give it a try.
    let res = [];
    if (!root) {
        return res;
    }
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let curLevel = [];
        while (size--) {
            let cur = queue.shift();
            curLevel.push(cur.val);
            if (cur.children.length > 0) {
                console.log('log cur.children', cur.children);
                // log cur.children [
                //   { val: 3, children: [ [Object], [Object] ] },
                //   { val: 2, children: [] },
                //   { val: 4, children: [] }
                // ]
                for (let i = 0; i < cur.children.length; i++) {
                    queue.push(cur.children[i]);
                }
            }
        }
        res.push(curLevel);
    }
    return res;
};