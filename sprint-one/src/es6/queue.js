class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[value] = value;
  }

  dequeue() {
    var firstObj = Object.keys(this.storage)[0];
    delete this.storage[firstObj];
    return firstObj;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
