/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Detect if there a cycle in the graph
    // e.g. [ [1], [0] ]. 0 => 1 , 1 => 0 ---- a cycle
    // TODO: build an adjacency list
    let adjList = Array.from({ length: numCourses }, () => []);
    for (let [end, start] of prerequisites) {
        adjList[start].push(end);
    }
    
    let visited = new Array(numCourses).fill(false);
    let visiting = new Array(numCourses).fill(false);
    
    
    const dfs = (node) => {
        // return: boolean
        // How to detect a cycle?
        // whenever we visit a node, we mark it as visiting
        // then we visit its neighbors -- invoke dfs() on neighbors
        // when we visit the neighbor, we check its neighbors
        if (visiting[node]) return false;
        // if we found a cycle
            // return false;
        if (visited[node]) return true; // we visit a fully processed node. so need to process it again. Return true;
        
        visiting[node] = true;
        for (let neighbor of adjList[node]) {
            // invoke dfs on each neighbor
            // if the result of dfs(neighbor) is false
            if (!dfs(neighbor)) return false;
                // return false
        }
    
        visiting[node] = false;
        visited[node] = true;
        return true;
    };
    
    // loop through all nodes/ courses, 
    for (let i = 0; i < numCourses; i++) {
        // invoke dfs() on each node
        // if the result of dfs() is false
        if (!visited[i]) {
            if (!dfs(i)) {
                // return false;
                return false;
            }   
        }
    }
    return true;
};