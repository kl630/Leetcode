/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // TODO: convert edges [[]] into an adjacency list
    // TODO: optimize: node values are 0-indexed, no need for key
    if (edges.length === 0) return true;
    let adjList = new Map();
    // [[0,1],[1,2]  ** bi-directional
        // => { '0' : [1, 2], '1': [0, 2], '2': [0] }
    for ([u, v] of edges) {
        if (!adjList.has(u)) {
            adjList.set(u, []);
        }
        adjList.get(u).push(v);
        
        if (!adjList.has(v)) {
            adjList.set(v, []);
        }
        adjList.get(v).push(u);
    }
    
    console.log('log adjList', adjList);
    let visited = new Set();
    
    // bfs
    const dfs = (src, dest) => {
        // return boolean val
        // TODO: base case
        // detected a cycle!
        if (visited.has(src)) {
            return false;
        }
        
        visited.add(src);
        let neighbors = adjList.get(src);
        // e.g. [1, 2]
        
        // if found a path between source to destination
            // return true
        for (let neighbor of neighbors) {
            if (neighbor === dest) {
                return true;
            } else {
            // not found yet, call dfs on neighboring nodes
                // TODO!!!
                // return dfs(neighbor, dest); // dfs has a return value
                if (dfs(neighbor, dest)) {
                    return true;
                }
            }
        }
      
        return false;
    };
    

    
    return dfs(source, destination);
};