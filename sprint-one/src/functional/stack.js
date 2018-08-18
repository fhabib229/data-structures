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
    var popElement =  lastObj;
    // ASK: what's the difference between setting object value = undefined vs delete?
    // https://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object
    delete storage[lastObj];
    return popElement;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
