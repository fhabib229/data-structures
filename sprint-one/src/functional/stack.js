var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
<<<<<<< HEAD
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.pop = function() {
    var garbage = storage[size];
    delete storage[size];
    size--;
    return garbage;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
=======
  someInstance.push = function(value, index) {
    storage[value] = value;
  };

  someInstance.pop = function() {
    var objectLength = Object.keys(storage).length;
    var lastObj = Object.keys(storage)[objectLength-1];
    delete storage[lastObj];
    return lastObj;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  };

  return someInstance;
};
