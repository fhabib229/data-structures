var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
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
}

var queue = new Queue();


