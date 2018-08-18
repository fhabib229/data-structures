var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
  };

  someInstance.dequeue = function() {
    var firstObj = Object.keys(storage)[0];
    delete storage[firstObj];
    return firstObj;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
