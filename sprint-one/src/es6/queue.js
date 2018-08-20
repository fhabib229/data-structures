class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.key = 0;
    this.storage = {};
  }

  enqueue(value) {
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
  }
}
