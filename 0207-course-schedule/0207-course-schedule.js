/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // build an adjacency list
    // detect if there is a cycle in the graph
    let adjList = Array.from({ length: numCourses }, () => []);
    // TODO: 
    for (let [end, start] of prerequisites) {
        adjList[start].push(end); 
    }
    
    let visited = new Array(numCourses).fill(false);
    let visiting = new Array(numCourses).fill(false);

    const dfs = (node) => { // node.val is also index's val
        // 1. params: node, return value: boolean
        // 2. base case
        if (visiting[node]) return false; // end up in a cycle
        if (visited[node]) return true; // has thoroughly and successfully processed that node
        // 3. recursive logic
        // if found a cycle -> return false
        // if not found a cycle yet, keep recursion
        visiting[node] = true;

        const neighbors = adjList[node];
        for (let neighbor of neighbors) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        // Done visiting. Reset it to visiting = false
        visiting[node] = false;
        // Mark it has visited
        visited[node] = true;
        
        return true;
    };
    
    // loop through all courses and invoke bfs on each course/node
    for (let i = 0; i < numCourses; i++) {
        // if the result of bfs is false
        if (!visited[i] && !dfs(i)) {
            // return false
            return false;
        }
    }
    return true;
};