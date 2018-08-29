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

  // define a new node, BinarySearchTree
  // compare value, see if go left / right
  // if left / right already has value, do recursive call
  var node = BinarySearchTree(value);
  var searchTree = function(bTree) {
    if (bTree.left === null && bTree.value > value) {
      bTree.left = node;
    } else if (bTree.right === null && bTree.value < value) {
      bTree.right = node;
    } else if (bTree.value > value) {
      searchTree(bTree.left);
    } else if (bTree.value < value) {
      searchTree(bTree.right);
    }
  }
  searchTree(this);
};
treeMethods.contains = function() {

};
treeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
