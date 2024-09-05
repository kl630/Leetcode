/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const n = graph.length;
    const adjacencyMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < graph.length; i++) {
        for (const neighbor of graph[i]) {
            adjacencyMatrix[i][neighbor] = 1;
        }
    }
    let res = [];
    let path = [];

    function dfs(start) {
        if (start === adjacencyMatrix.length - 1) { // Reached the target
            res.push([...path]);
            return;
        }

        for (let i = 0; i < adjacencyMatrix.length; i++) {
            if (adjacencyMatrix[start][i] === 1) { // There's an edge from start to i
                path.push(i);
                dfs(i);
                path.pop(); // Backtrack
            }
        }
    }

    path.push(0); // Start from node 0
    dfs(0);
    return res;
};