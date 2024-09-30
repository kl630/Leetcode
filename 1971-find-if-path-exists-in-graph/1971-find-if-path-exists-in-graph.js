/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (source === destination) return true; // if source and destination are same, return true

    // Build adjacency list from edges
    const adjacencyList = new Map();
    for (let [u, v] of edges) {
        if (!adjacencyList.has(u)) {
            adjacencyList.set(u, []);
        }
        adjacencyList.get(u).push(v);

        if (!adjacencyList.has(v)) {
            adjacencyList.set(v, []);
        }
        adjacencyList.get(v).push(u);
    }

    // DFS with visited Set to prevent revisiting nodes
    let visited = new Set();
    
    const dfs = (start) => {
        if (start === destination) return true;
        visited.add(start);

        const neighbors = adjacencyList.get(start);
        
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true; // early return if we find the destination
                }
            }
        }
        return false; // no path found from this node
    };

    return dfs(source);
};
