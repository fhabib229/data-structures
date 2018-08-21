var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
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
  };

  return someInstance;
};
