var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storageSize = 0;
  someInstance.storage = {};
  return someInstance;
};

stackMethods = {
  push: function(value) {
    this.storageSize++;
    this.storage[this.storageSize] = value;
  },
  pop: function() {
    var garbage = this.storage[this.storageSize];
    delete this.storage[this.storageSize];
    this.storageSize--;
    return garbage;
  },
  size: function() {
    if (this.storageSize < 0) {
      this.storageSize = 0;
    }
    return this.storageSize;
  }
};


