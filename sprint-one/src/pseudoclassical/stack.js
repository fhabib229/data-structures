var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  this.key = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.key++;
  this.storage[this.key] = value;
};
Stack.prototype.pop = function() {
  var garbage = this.storage[this.key];
  delete this.storage[this.key];
  this.key--;
  return garbage;
};
Stack.prototype.size = function() {
  if (this.key < 0) {
    this.key = 0;
  }
  return this.key;
=======
  this.storage = {};
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
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


