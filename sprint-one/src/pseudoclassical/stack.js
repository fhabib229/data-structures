var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[value] = value;
};

Stack.prototype.pop = function() {
  var objectLength = Object.keys(this.storage).length;
  var lastObj = Object.keys(this.storage)[objectLength-1];
  delete this.storage[lastObj];
  return lastObj;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length
};

var stack = new Stack();


