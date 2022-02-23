# Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

Is a collection of nodes and connections between these nodes. 

There is no parent node, starting place. 

## Types of Graphs

### Terminology

- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distances between vertices
  
![graph](/images/graphs.png)

![direction](https://sites.google.com/a/cs.christuniversity.in/discrete-mathematics-lectures/_/rsrc/1409480658489/graphs/directed-and-undirected-graph/dir.png)

Undirected = can go from A to B, or B to A.

Directed Graph - often represented with arrows. C is basically a dead end. 

![weighted graph](https://nycomdorics.com/wp-content/uploads/2020/03/graph_example2.png)

Unweighted - each edge has no value assigned with it. 
Weighted graph - has information about the connection between vertices. 

## Adjacency Matrix

Data we are going to represented.
![graph](/images/graph2.png)

Can use a table.
0 = no connection
1 = has connection
![graph](/images/graph3.png)

## Adjacency List

![graph](/images/graph4.png)