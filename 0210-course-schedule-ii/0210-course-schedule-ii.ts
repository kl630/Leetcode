function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    let adjList: Map<number, number[]> = new Map()              // adjList: [ 0 => [1] ]  [[1]] array[0] = value
    let inDegrees: number[] = new Array(numCourses).fill(0);    // [ 0, 1 ]
    let result: number[] = []
   
    for (let [course, prereq] of prerequisites) {
        if (!adjList.has(prereq)) {
            adjList.set(prereq, [])
        }
        adjList.get(prereq).push(course);
        inDegrees[course]++
    }
   
    console.log("adj", adjList)
   
    let queue: number[] = []        
   
    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) queue.push(i)
    }
   
    while (queue.length > 0) {
        // process the current node
        let currentNode = queue.shift()
        result.push(currentNode)
       
        console.log("neoghbor? ",adjList.get(currentNode))
        if (adjList.get(currentNode)) {
                for (let neighbor of adjList.get(currentNode)) {
                    inDegrees[neighbor]--

                    if (inDegrees[neighbor] === 0) queue.push(neighbor)
                }    
        }

    }
   
    return result.length === numCourses ? result : [];
};