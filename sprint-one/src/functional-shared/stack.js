var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push : function(value) {
    this.storage[value] = value;
  },
  pop : function() {
    var objectLength = Object.keys(this.storage).length;
    var lastObj = Object.keys(this.storage)[objectLength-1];
    delete this.storage[lastObj];
    return lastObj;
  },
  size : function() {
    return Object.keys(this.storage).length;
  }
};


