var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
<<<<<<< HEAD
  someInstance.storageSize = 0;
  $.extend(someInstance, queueMethods);
=======
  _.extend(someInstance, queueMethods);
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  return someInstance;
};

var queueMethods = {
<<<<<<< HEAD
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


=======
  enqueue : function(value) {
    this.storage[value] = value;
  },
  dequeue : function() {
    var firstObj = Object.keys(this.storage)[0];
    delete this.storage[firstObj];
    return firstObj;
  },
  size : function() {
    return Object.keys(this.storage).length;
  }
};
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
