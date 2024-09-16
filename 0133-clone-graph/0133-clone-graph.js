/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
    
    const visited = new Map();
    
    const dfs = (node) => {
        // 1. dfs params and return value
            // node as a param; return: cloned node
        // 2. termination condition
        if (visited.has(node)) {
            return visited.get(node);
        }
        let clone = new Node(node.val);
        visited.set(node, clone);
        // 3. handling the path starting from the current node
        for (const neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    };
    
    return dfs(node);
};