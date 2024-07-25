function dfs(graph, root) {
  const nodesRemoved = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    nodesRemoved.push(node);
    for (let i = 0; i < graph[node].length; i++) {
      if (graph[node][i] === 1) {
        graph[i][node] = 0; // cuando se ha considerado el nodo i conectado al node ya no es necesario considerarlo en el grafo
        graph[node][i] = 0;
        stack.push(i);
      }
    }
  }

  return nodesRemoved;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(dfs(exDFSGraph, 3));
console.log(exDFSGraph);
