function bfs(graph, root) {
  // graph is a adjacency matrix graph
  let nodesLen = {};
  const queue = [root];
  nodesLen[root] = 0;
  while (queue.length) {
    const node = queue.shift();

    for (let i = 0; i < graph[node].length; i++) {
      if (graph[node][i] === 1) {
        nodesLen[i] = nodesLen[node] + 1;
        graph[i][node] = 0;
        graph[node][i] = 0;
        queue.push(i);
      }
    }
  }
  let unreacheableValue = Infinity;
  for (let i = 0; i < graph.length; i++) {
    if (nodesLen[i] === undefined) {
      nodesLen[i] = unreacheableValue;
    }
  }

  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(bfs(exBFSGraph, 0));
