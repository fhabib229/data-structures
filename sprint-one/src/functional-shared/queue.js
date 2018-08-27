var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.storageSize = 0;
  $.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storageSize++;
    this.storage[this.storageSize] = value;
  },
  dequeue: function() {
    var garbage = this.storage[1];
    delete this.storage[1];
    var values = Object.values(this.storage);
    this.storageSize--;
    for (var key in this.storage) {
      delete this.storage[key];
    }
    for (var i = 1; i <= this.storageSize; i++) {
      this.storage[i] = values[i - 1];
    }
    return garbage;
  },
  size: function() {
    if (this.storageSize < 0) {
      this.storageSize = 0;
    }
    return this.storageSize;
  }
};


