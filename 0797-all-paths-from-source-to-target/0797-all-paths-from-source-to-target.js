/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // DFS - Depth First Search
    // 1.  define recursion function and params
    // 2. decide on when to terminate the recursion
    // 3. traverse
    let res = [];
    let path = [];

    function dfs(graph, start) {
        if (start === graph.length - 1) { // base case: when start node is the last node
            res.push([...path]);
            return;
        }
        for (let i = 0; i < graph[start].length; i++) {
            path.push(graph[start][i]);
            dfs(graph, graph[start][i]);
            path.pop(); // the neighbor node is removed from the path to backtrack and 
                        // explore other paths
        }
    }

    path.push(0);
    dfs(graph, 0);
    return res;
};