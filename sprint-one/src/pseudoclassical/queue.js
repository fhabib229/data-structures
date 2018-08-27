var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.key++;
  this.storage[this.key] = value;
};
Queue.prototype.dequeue = function() {
  var garbage = this.storage[1];
  delete this.storage[1];
  var values = Object.values(this.storage);
  for (var key in this.storage) {
    delete this.storage[key];
  }
  this.key--;
  for (var i = 1; i <= this.key; i++) {
    this.storage[i] = values[i - 1];
  }
  return garbage;
};
Queue.prototype.size = function() {
  if (this.key < 0) {
    this.key = 0;
  }
  return this.key;
};

Queue.prototype.enqueue = function(value) {
  this.storage[value] = value;
};

Queue.prototype.dequeue = function() {
  var firstObj = Object.keys(this.storage)[0];
  delete this.storage[firstObj];
  return firstObj;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var queue = new Queue();


