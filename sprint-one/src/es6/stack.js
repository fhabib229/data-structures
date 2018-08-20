class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.key = 0;
    this.storage = {};
  }

  push(value) {
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
  }

}