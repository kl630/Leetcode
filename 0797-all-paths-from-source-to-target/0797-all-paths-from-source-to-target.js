/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // the given input is an ajacency list representation of a graph
    let result = [];
    let path = [];
    
    // [[1,2],[3],[3],[]]
    // number of nodes = graph.length; 
    // e.g. 4 nodes; node 0, node 1, node 2, node 3
    const dfs = (graph, start) => {
        // TODO: how to handle the first node- node 0?
        
        // 1. dfs params: graph,  and return value: void, just update result 
        // 2. base case
        // when we reach the last node (node n-1), then we will collect the current path and push it to result []
        if (start === graph.length - 1) {
            result.push([...path]);
            return;
        }
        // 3. how to process the path starting from the current node
        // for (let i = start; i < graph.length; i++) {
        let neighbors = graph[start];
        for (let neighbor of neighbors) { // let.(index??)..in ... OR let.(element??)..of ...??
            console.log('log neighbor', neighbor);
            path.push(neighbor);
            dfs(graph, neighbor);
            path.pop();
        }
        //}
    };
    path.push(0);
    dfs(graph, 0);
    return result;
};