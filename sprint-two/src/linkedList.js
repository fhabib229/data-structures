var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
// {head: {value: 4, next: {value: }}, tail: {value: 5, next: null}}
  list.addToTail = function(value) {
    // check whether list has a node
      // if not, initiate node
      // if list is not empty, find the last node and add a new node to it.
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail = newNode;
      this.head.next = newNode;
    }
  };

  list.removeHead = function() {
    // Store value of the current head
    // Then p[oint the current head to the next node's value
    var formerHeadValue = list.head.value;
    list.head = this.head.next;
    return formerHeadValue;
  };

  list.contains = function(target) {
    // Create an array
    // Iterate through LL until next = null
      // Push the value properties into the array
    // If array includes the target
      // return true
    var linkedListValue = [];
    var currentPosition = this.head;
    while (currentPosition.next !== null) {
      linkedListValue.push(currentPosition.value);
      linkedListValue.push(currentPosition.next.value);
      currentPosition = currentPosition.next;
    }

    // for every property in linkedlist
    // iterate through properties
    // push property value into array
    // for (var node in list.head) {
    //   if (node.hasOwnProperty('value')) {
    //     listedListValue.push(node.value)
    //   }
    // }

    if (linkedListValue.includes(target)) {
      return true;
    } else {
      return false;
    }
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