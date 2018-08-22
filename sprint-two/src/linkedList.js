var LinkedList = function() {
  var list = {};
  // initialize linkedList instance
  list.linkedListNode = Node();
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // linked list format: {value: 4, next: {value: 5, next: {value: 6, next: null}}}

    // first check if the linkedList is empty
    if (this.linkedListNode.value === undefined) {
      // if yes, initilize node, and point both head and tail to the same node.
      this.linkedListNode = Node(value);
      var currentPosition = this.linkedListNode;
      this.head = currentPosition;
      this.tail = currentPosition;
      return this.tail;
    } else {
      // if not, find the lastNode and add the new node to lastNode.next
      var currentPosition = this.linkedListNode;
      while(currentPosition.next !== null) {
        currentPosition = currentPosition.next;
      }
      currentPosition.next = Node(value);
      this.tail = currentPosition.next;
      return this.tail;
    }
  };

  list.removeHead = function() {
    var removedHead = this.head.value;
    this.linkedListNode = this.linkedListNode.next;
    this.head = this.head.next;
    return removedHead;
  };

  list.contains = function(target) {
    var currentPosition = this.linkedListNode;
    while(currentPosition.value !== target) {
      currentPosition = currentPosition.next;

      if (currentPosition === null) {
        return false;
      }
    }
    return true;
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
 * list.addToTail => O(1);
 * list.removeHead => O(1);
 * list.contains => O(n);
 */
