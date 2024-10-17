function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Map<number, number[]> = new Map(); // Adjacency list
  const dependencyCount: Map<number, number> = new Map(); // Track unvisited prerequisites
  const queue: number[] = []; // Store courses ready to process
  const result: number[] = []; // Topological order

  // Build the graph and initialize dependency counts
  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []); // Ensure all courses exist in the graph
    dependencyCount.set(i, 0); // Initialize dependency count to 0
  }

  for (const [course, pre] of prerequisites) {
    graph.get(pre)!.push(course); // Add course as a neighbor of pre
    dependencyCount.set(course, dependencyCount.get(course)! + 1); // Increment dependency count for the course
  }

  // Initialize the queue with courses that have no prerequisites
  for (let [course, count] of dependencyCount) {
    if (count === 0) queue.push(course); // No dependencies
  }

  // Process the courses using BFS
  while (queue.length > 0) {
    const current = queue.shift()!; // Dequeue a course
    result.push(current); // Add to topological order

    // Explore neighbors (dependent courses)
    for (const neighbor of graph.get(current) || []) {
      dependencyCount.set(neighbor, dependencyCount.get(neighbor)! - 1); // Decrement dependency count
      if (dependencyCount.get(neighbor) === 0) {
        queue.push(neighbor); // If no more prerequisites, add to queue
      }
    }
  }

  // If we couldn't process all courses, return an empty array (cycle detected)
  return result.length === numCourses ? result : [];
}
