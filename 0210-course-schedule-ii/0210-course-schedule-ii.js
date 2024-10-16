/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Solution 1: DFS + using visited and visiting helper arrays to detect cycle and update result []
    
    let result = [];
    // return result [] with the ordering of courses
    // if we cannot take them all --- if there's a cycle in the graph
        // return an empty [];
    
    // 1. build an adjacency list
    // { 0: [1, 2], 1: [3], 2: [3], 3: []}
    let adjList = new Map();
    for (let i = 0; i < numCourses; i++) {
        adjList.set(i, []);
    }
    
    for (let [end, start] of prerequisites) {
        adjList.get(start).push(end);
    }
    
    // 2. dfs(): should it have return value? or just to update global variable result[]
    // Keren Question: can we do: when detected a cycle - return false
    // otherwise, just update result []
    let visited = new Array(numCourses).fill(false);
    let visiting = new Array(numCourses).fill(false);

    const dfs = (node) => {
        // 1. params and return value
        // 2. base case
        if (visited[node]) return true;
        if (visiting[node]) return false;
        // 3. recursive logic
        visiting[node] = true;
        for (let neighbor of adjList.get(node)) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        
        visiting[node] = false;
        // update result
        result.push(node);
        // [3, 1, 2, 0]
        visited[node] = true;
        return true; // THIS IS VERY IMPORTANT!!
    };
    
    // 3. loop through all nodes/courses
    for (let i = 0; i < numCourses; i++) {
        // if a course is not visited yet
        if (!visited[i]) {
            // invoke dfs() on it    
            // if the result of dfs() is falsy--- there is a cycle in the graph
            if (!dfs(i)) {
                // return []
                return [];
            }
        }
    }
    // return result; need to reverse result []
    return result.reverse();
    
    // TODO: Solution 2: pure BFS (use a visited helper array to detect cycle)
    // TODO: Solution 3: BFS + Topological sorting (use indegrees array to detect cycle)
};