

// Instantiate a new graph
var Graph = function() {
  var obj = Object.create(Graph.prototype);
  obj.nodeArray = [];
  obj.edge = [];
  return obj;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push node to array
  this.nodeArray.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate through nodeArray
  if (this.nodeArray.includes(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove the node parameter
  this.nodeArray.splice(this.nodeArray.indexOf(node),1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // determine if edge property has [fromNode, toNode]
  // iterate
  for (var i = 0; i< this.edge.length; i++) {
    if (this.edge[i][0] === fromNode && this.edge[i][1] === toNode) {
      return true;
    } else if (this.edge[i][0] === toNode && this.edge[i][1] === fromNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var connection = [];
  connection.push(fromNode, toNode);
  this.edge.push(connection);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if this.hasEdge
  //var connection
  // iterate through this.edge
    //if (this.edge[i][0] === fromNode && this.edge[i][1] === toNode)
    //connection = i
  //this.edge.splice(connection)
  var connection;
  if (this.hasEdge(fromNode, toNode)) {
    for (var i = 0; i< this.edge.length; i++) {
      if (this.edge[i][0] === fromNode && this.edge[i][1] === toNode) {
        connection = i;
      } else if (this.edge[i][0] === toNode && this.edge[i][1] === fromNode) {
        connection = i;
      }
    }
  }
  this.edge.splice(connection)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


