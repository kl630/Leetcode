/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    // Node.children.length
    // instead of in a binary tree where we use Node.left and Node.right
    // here we need to use Node.children[0], Node.children[1], .... ...
    // recursion --- postorder
    if (root === null) return 0;
    let max: number = 0;
    for (let i = 0; i < root.children.length; i++) {
        max = Math.max(max, maxDepth(root.children[i]));
    }
    max += 1;
    return max;
};