var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
<<<<<<< HEAD
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
=======
    storage[value] = value;
  };

  someInstance.dequeue = function() {
    var firstObj = Object.keys(storage)[0];
    delete storage[firstObj];
    return firstObj;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  };

  return someInstance;
};
