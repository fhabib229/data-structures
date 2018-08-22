var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // initialize linkedList instance
  list.linkedListNode = Node();

  list.addToTail = function(value) {
    // {value: 4, next: {value: 5, next: {value: 6, next: null}}}
    // first check if the linkedList is empty
    if (this.linkedListNode.value === undefined) {
      // if yes, node.value = value, both head and tail equals the same node.
      this.linkedListNode = Node(value);
      this.head = this.linkedListNode;
      this.tail = this.linkedListNode;
    } else {
      // if no, find the last null (recursively?)
      // and point "next" to new node
      // this.linkedListNode.next = Node(value);
      // while loop?
      list.tail.next = Node(value);
    }
  };

  function findTail(list) {
    var output;
    // base case
    if (list.next === null) {
      return list;
    } else {
      findTail(list.next);
    }
  }

  list.removeHead = function() {
    // console.log(Object.keys(list));
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
