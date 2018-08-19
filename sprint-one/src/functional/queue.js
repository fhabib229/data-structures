var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var garbage = storage[1];
    delete storage[1];
    var values = Object.values(storage);
    size--;
    for (var key in storage) {
      delete storage[key];
    }
    for (var i = 1; i <= size; i++) {
      storage[i] = values[i - 1];
    }
    return garbage;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
