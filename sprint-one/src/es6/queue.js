class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
    this.key = 0;
=======
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
    this.storage = {};
  }

  enqueue(value) {
<<<<<<< HEAD
    this.key++;
    this.storage[this.key] = value;
  }

  dequeue() {
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
  }

  size() {
    if (this.key < 0) {
      this.key = 0;
    }
    return this.key;
=======
    this.storage[value] = value;
  }

  dequeue() {
    var firstObj = Object.keys(this.storage)[0];
    delete this.storage[firstObj];
    return firstObj;
  }

  size() {
    return Object.keys(this.storage).length;
>>>>>>> b51a52091cd97d809f31ba3597d2c86b7cf07756
  }
}
