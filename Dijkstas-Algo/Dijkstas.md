# Dijkstra's Algorithm

- uses graphs and priority queues to search a graph. 

- **Finds the shortest path between two vertices on a graph**
- "What's the fastest way to get from point A to point B?"

#### Use cases

- GPS - finding fastest route 
- Network Routing - finds open shortest path for data 
- Biology - used to model the spread of viruses among humans 
- Airline tickets - finding cheapest route to your destination 

## Writing a **Weighted Graph**

Need to slightly modify the graph class:
```
class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  // need to add weight
  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({ node: vertex2, weight });
    this.adjList[vertex2].push({ node: vertex1, weight });
  }
}

let graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);

console.log(graph.adjList);
{ A: [ { node: 'B', weight: 9 }, { node: 'C', weight: 5 } ],
  B: [ { node: 'A', weight: 9 }, { node: 'C', weight: 7 } ],
  C: [ { node: 'A', weight: 5 }, { node: 'B', weight: 7 } ] }
```

## Basics of Dijkstra Algorithm

![shortest path](/images/weighted.png)

1. Every time we look to visit a new node, we pick the node with the **smallest known distance to visit first**.
2. Once we’ve moved to the node we’re going to visit, we look at each of its **neighbors**
3. For each neighboring node, we **calculate the distance** by **summing** the **total edges** that lead to the node we’re checking from the starting node.
4. If the new total distance to a node is **less** than the previous total, we store the **new shorter distance for that node**.

---

### Simple Priority Queue

Every time we insert (enqueue) we resort the queue.
```
class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}
```
Notice we are sorting which is O(N * log(N))

Every time you dequeue, it returns the smallest value first. 

---

### Dijkstra Pseudocode

- This function should accept a **starting** and **ending** vertex.
- Create an **object** (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0. This will collect our shortest distances.
- Make a **priority queue**. After setting a value in the distances object, add each vertex with a priority of Infinity to the **priority queue**, except the starting vertex, which should have a priority of 0 because that's where we begin.
- Create another object called **previous** and set each key to be every vertex in the adjacency list with a value of null. Tells your shortest distance between two vertices.
- Start **looping** as long as there is anything in the **priority queue**.
  - **dequeue** a vertex from the priority queue.
  - If that vertex is the same as the ending vertex - we are done!
  - Otherwise loop through each value in the adjacency list at that vertex.
    - Calculate the distance to that **vertex** from the **starting vertex**.
    - if the distance is **less** than what is **currently stored** in our **distances** object
      - update the distances object with new lower distance.
      - update the previous object to contain that vertex.
      - enqueue the vertex with the total distance from the start node.

---

[for...in:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

```
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  // need to add weight
  addEdge(vertex1, vertex2, weight) {
    this.adjList[vertex1].push({ node: vertex2, weight });
    this.adjList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = []; // to return at end

    // build up initial state
    for (let vertex in this.adjList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // console.log(distances);
    // console.log(nodes);
    // console.log(previous);
    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; //remember, set up PriorityQueue to sort lowest first
      if (smallest === finish) {
        // console.log(distances);
        // console.log(nodes);
        // console.log(previous);
        // we are done
        // build path to return at the end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjList[smallest]) {
          // find neighboring node
          let nextNode = this.adjList[smallest][neighbor];
          // calculate new distance between neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating the distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to next neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority.
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.Dijkstra('A', 'E'));

// [ 'A', 'C', 'D', 'F', 'E' ]
```

---

### update code with a heap priority queue

```
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");
```





[Slides](https://cs.slides.com/colt_steele/graphs#/70)