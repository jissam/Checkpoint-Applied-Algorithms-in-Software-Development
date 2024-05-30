function dijkstra(graph, start) {
  const distances = {};
  const queue = [];
  let visited = new Set();
  //Init distance
  for (let v in graph) {
    if (v === start) {
      distances[v] = 0;
    } else {
      distances[v] = Infinity;
    }
    queue.push(v);
  }

  while (queue.length > 0) {
    // Find vertex with the smallest distance
    let minDistance = Infinity;
    let minVertex = null;
    for (let vertex of queue) {
      if (distances[vertex] < minDistance) {
        minDistance = distances[vertex];
        minVertex = vertex;
      }
    }
    if (minVertex === null) {
      break;
    }
    // remove vertex from queue
    queue.splice(queue.indexOf(minVertex), 1);
    // Mark the vertex is visited
    visited.add(minVertex);

    // distances update
    for (let noeud in graph[minVertex]) {
      if (!visited.has(noeud)) {
        let newDistance = distances[minVertex] + graph[minVertex][noeud];
        if (newDistance < distances[noeud]) {
          distances[noeud] = newDistance;
        }
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

const start = "A";

console.log(dijkstra(graph, start));
