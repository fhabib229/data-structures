var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.checkSize = 0;
  someInstance.storage = {};
  $.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.checkSize++;
    this.storage[this.checkSize] = value;
  },
  pop: function() {
    var garbage = this.storage[this.checkSize];
    delete this.storage[this.checkSize];
    this.checkSize--;
    return garbage;
  },
  size: function() {
    if (this.checkSize < 0) {
      this.checkSize = 0;
    }
    return this.checkSize;
  }
};


