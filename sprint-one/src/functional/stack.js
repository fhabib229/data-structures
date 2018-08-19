var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {

  };
  var size = 0;
  var keys = Object.keys(storage);

  // Implement the methods below
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
  };

  return someInstance;
};
