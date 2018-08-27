var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
<<<<<<< HEAD
  someInstance.checkSize = 0;
  someInstance.storage = {};
  $.extend(someInstance, stackMethods);
=======
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  return someInstance;
};

var stackMethods = {
<<<<<<< HEAD
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


