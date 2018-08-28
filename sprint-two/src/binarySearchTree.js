var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.children = [];
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  $.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};
treeMethods.insert = function(value) {
  // determine if value is going to left or right
  // all left values < current value that's being passed in
  // all right values > current value that's being passed in
  // if no value in tree,
  // if passed in value > this.value
    // add to right tree
  // else if passed in value < this.value
    // add to left tree
  if (!this.value) {
    this.value = value;
  } else if (value > this.value) {
    this.right = BinarySearchTree(value);
  } else {
    this.left = BinarySearchTree(value);
  }
};
treeMethods.contains = function() {

};
treeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
