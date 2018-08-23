var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var targetNode = treeNode(value);
  this.children.push(targetNode);
};

treeMethods.contains = function(target) {
  var flattenTree = [];
  _.each(this.children, function(treeNode){
    flattenTree.push(treeNode.value);
  })
  if (flattenTree.includes(target)) {
    return true;
  } else {
    return false;
  }
};

var treeNode = function(value) {
  var node = [];
  node.value = value;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
