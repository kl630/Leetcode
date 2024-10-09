/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let result = [];
    // build adjacency list
    let adjList = Array.from({ length: numCourses}, () => []);
    let visited = new Array(numCourses).fill(false);
    let visiting = new Array(numCourses).fill(false);

    for (let [end, start] of prerequisites) {
        adjList[start].push(end);
    }
    
    const dfs = (node) => {
        // goal: do 2 things. detect if there is a cycle; AND update result []
        // return value: boolean
        // base case:
        if (visited[node]) {
            return true;
        }
        if (visiting[node]) {
            return false;            
        }
        
        visiting[node] = true;
        for (let neighbor of adjList[node]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        visiting[node] = false;
        // update result
        result.push(node);
        visited[node] = true;
        return true;
    };
    
    // loop through numCourses
    for (let i = 0; i < numCourses; i++) {
        // invoke dfs on each course/node
        // if the result of dfs() is false
        if (!visited[i] && !dfs(i)) {
            return [];
        }
    }
    return result.reverse();
};