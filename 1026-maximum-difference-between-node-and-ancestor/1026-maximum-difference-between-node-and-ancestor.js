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
var maxAncestorDiff = function(root) {
    // let maxDiff = -Infinity;
    // middle -> left -> right

    
    // helper function: dfs()
    //   3
    // 1   6
    //    4  7

    // max = 8, min = 8
    // maxDiff = -Infinity, 
    // node = 3
    // dfs(1)
    const dfs = (node, curMin, curMax) => {
    // 1. Base case: if the node is null, return the difference between the current max and min values
    if (!node) return curMax - curMin;
    
    // 2. Update the current min and max values with the node's value
    curMin = Math.min(curMin, node.val);
    curMax = Math.max(curMax, node.val);

    // 3. Recurse into the left and right subtrees
    let leftMaxDiff = dfs(node.left, curMin, curMax);
    let rightMaxDiff = dfs(node.right, curMin, curMax);

    // 4. Return the maximum difference found in either the left or right subtree
    return Math.max(leftMaxDiff, rightMaxDiff);
};
//     const dfs = (node, curMin, curMax) => {

//         // let min = root.val;
//         // let max = root.val;
//         // 1.TODO: params: node, and return value: maxDiff
//         // 2. TODO: base case
//         if (!node) return curMax - curMin;
        
//         // 3. TODO: logic at each recursion level
//         // traversal order doesn't really matter. I use inorder here.
//         // the goal is to traverse the entire tree and update max and min 
//         // left:
//         dfs(node.left, curMin, curMax);
//         // middle:
//         console.log('log node.val', node.val);
//         if (node.val > curMax) {
//             curMax = node.val;
//         }
        
//         if (node.val < curMin) {
//             curMin = node.val;
//         }
//         console.log('log min', curMin);
        
//         console.log('log max', curMax);
//         maxDiff = Math.max(maxDiff, curMax - curMin);
//         console.log('log maxDiff', maxDiff);

//         // right:
//         dfs(node.right, curMin, curMax);
//         // maxDiff = Math.max(maxDiff, curMax - curMin);

    

//         return maxDiff;
//     };
    
    let leftRes = dfs(root.left, root.val, root.val);
    console.log('log leftRes', leftRes);
    let rightRes = dfs(root.right, root.val, root.val);
    console.log('log rightRes', rightRes);

    return Math.max(leftRes, rightRes);
};


// use an example
