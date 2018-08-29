var BinarySearchTree = function(value) {
  var binaryTree = {};
  binaryTree.children = [];
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  $.extend(binaryTree, binaryMethods);
  return binaryTree;
};

var binaryMethods = {};
binaryMethods.insert = function(value) {
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
  };
  searchTree(this);
};
binaryMethods.contains = function(value) {
  // Use a recursive function to compare the value passed in w/ left and right values
  // Base: if value is the same, return true
  // If value is not the same, check whether the value is less than or greater than the current bTree value
  // If less, go left
  // Call recursive function
  // If greater, go right
  // Call recursive function
  // If both left and right are null and no match
  // return false
  var result = false;
  var compareTree = function(bTree) {
    if (bTree.value === value) {
      result = true;
    } else {
      if (bTree.left && value < bTree.value ) {
        compareTree(bTree.left);
      }
      if (bTree.right && value > bTree.value ) {
        compareTree(bTree.right);
      } else {
        result = false;
      }
    }
  };
  compareTree(this);
  return result;
};
binaryMethods.depthFirstLog = function(cb) {
  var searchTree = function(bTree) {
    cb(bTree.value);
    if (bTree.left) {
      searchTree(bTree.left);
    }
    if (bTree.right) {
      searchTree(bTree.right);
    }
    if (bTree.right === null && bTree.left === null) {
      return;
    }
  };
  searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n);
 * contains: O(log n);
 * depthFirstLog: O(n);
 */
