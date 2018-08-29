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
<<<<<<< HEAD
  // add to left tree
  if (!this.value) {
    this.value = value;
  } else if (value > this.value) {
    this.right = BinarySearchTree(value);
  } else {
    this.left = BinarySearchTree(value);
=======
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
>>>>>>> 32fa4a2c679944c2d760bef40422533d1d42c032
  }
  searchTree(this);
};
treeMethods.contains = function(value) {
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
  }
  compareTree(this);
  return result;
};
treeMethods.depthFirstLog = function(cb) {
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
  }
  searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n);
 * contains: O(log n);
 * depthFirstLog: O(n);
 */
