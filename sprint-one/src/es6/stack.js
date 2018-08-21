class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
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
  }

}