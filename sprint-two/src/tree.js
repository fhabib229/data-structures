var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  $.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  contains: function(target) {
    // if tree has target value
    // return true
    // test to see if this.children.length > 0
    // if yes,
    // test if children have target value
    // return true
    // else return false
    if (this.value === target) {
      return true;
    } else if (this.children.length) {
      for (var i = 0; i < this.children.length ; i++ ) {
        if (this.children[i].value === target) {
          return true;
        }
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
    return false;
  },
  addChild: function(value) {
    // initiate a node object
    // create a value property on node object, set it to value
    // create a children property and set it to empty array
    // push node to main tree children property
    this.children.push(Tree(value));
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */