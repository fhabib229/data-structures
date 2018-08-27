class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
    this.key = 0;
=======
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
    this.storage = {};
  }

  push(value) {
<<<<<<< HEAD
    this.key++;
    this.storage[this.key] = value;
  }

  pop() {
    var garbage = this.storage[this.key];
    delete this.storage[this.key];
    this.key--;
    return garbage;
  }

  size() {
    if (this.key < 0) {
      this.key = 0;
    }
    return this.key;
=======
    this.storage[value] = value;
  }

  pop() {
    var objectLength = Object.keys(this.storage).length;
    var lastObj = Object.keys(this.storage)[objectLength-1];
    delete this.storage[lastObj];
    return lastObj;
  }

  size() {
    return Object.keys(this.storage).length;
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  }

}