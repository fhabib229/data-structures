var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  _.extend(someInstance, queueMethods);
  // initialize
  someInstance.enqueue = enqueue;
  someInstance.dequeue = dequeue;
  someInstance.size = size;
  return someInstance;
  //return storage;
};

// think about extend
// var extend = function(obj, methods) {
//   for (var key in methods) {
//     obj[key] = methods[key];
//   }
// }


Queue.queueMethods = {
  enqueue : function(value) {
    this.storage[value] = value;
  },
  dequeue : function() {
    var firstObj = Object.keys(this.storage)[0];
    delete this.storage[firstObj];
    return firstObj;
  },
  size : function() {
    // console.log(Queue);
    // console.log(Queue.queueMethods.storage);
    // console.log(Object.keys(Queue.queueMethods.storage).length);
    return Object.keys(this.storage).length;
  }
};

// console.log(Queue);

// var Queue = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[value] = value;
//   };

//   someInstance.dequeue = function() {
//     var firstObj = Object.keys(storage)[0];
//     delete storage[firstObj];
//     return firstObj;
//   };

//   someInstance.size = function() {
//     return Object.keys(storage).length;
//   };

//   return someInstance;
// };
