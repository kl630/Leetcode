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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    // helper function:
    const getLeftMostNode = (cur) => {
        // need to return something
        if (!cur.left) {
            return cur;
        } else {
            return getLeftMostNode(cur.left);
        }
    };
    
    if (!root) return root;
    if (root.val === key) {
        console.log('you found the key- log root.val', root.val);
        // root = null;
        
        // if current node is a leaf node
        if (!root.left && !root.right) {
            root = null;
        } else if (root.left && !root.right) { // if current node is a parent node
            root = root.left;
        } else if (root.right && !root.left) {
            root = root.right
        } else if (root.left && root.right) {
            // Keren Todo: if it has both left and right children
            // need to find the leftmost leaf node of the right subtree
            // attach the original left subtree to that leaf node
            let leftSubtree = root.left;
            let rightSubtree = root.right;
            let leftMostNodeInRightSubtree = getLeftMostNode(rightSubtree);
            root = rightSubtree;
            leftMostNodeInRightSubtree.left = leftSubtree;
        }

    } else if (root.val < key) {
         root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
         root.left = deleteNode(root.left, key);
    } 
    
    return root;
};