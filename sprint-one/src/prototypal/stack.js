var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
<<<<<<< HEAD
  someInstance.storageSize = 0;
=======
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
<<<<<<< HEAD
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
=======
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
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  }
};


