/*
Exercise:
Implement a Double-Ended Queue (Deque) in JavaScript using a class. 
A Double-Ended Queue is a data structure that allows elements to be added or removed from both ends. 
Your class should have the following methods:

enqueueFront(element): Adds an element to the front of the deque.
enqueueRear(element): Adds an element to the rear of the deque.
dequeueFront(): Removes and returns the element from the front of the deque.
dequeueRear(): Removes and returns the element from the rear of the deque.
front(): Returns the element at the front of the deque without removing it.
rear(): Returns the element at the rear of the deque without removing it.
size(): Returns the number of elements in the deque.
isEmpty(): Returns true if the deque is empty, and false otherwise.
print(): Prints the elements of the deque.

Implement the class and demonstrate its usage with various deque operations.

*/

var Stack = function () {
  var deque = [];

  this.enqueueFront = function (element) {
    return deque.unshift(element);
  };
  this.enqueueRear = function (element) {
    return deque.push(element);
  };
  this.dequeueFront = function () {
    return deque.shift();
  };
  this.dequeueRear = function () {
    return deque.pop();
  };
  this.front = function () {
    return deque[0];
  };
  this.rear = function () {
    return deque[deque.length - 1];
  };
  this.size = function () {
    return deque.length;
  };
  this.isEmpty = function () {
    return deque.isEmpty;
  };
  this.print = function () {
    console.log(deque);
  };
  this.print = function () {
    console.log(deque);
  };
};

// Testing our implementation
var myStack = new Stack();
myStack.enqueueRear("1");
myStack.enqueueRear("2");
myStack.enqueueRear("3");

console.log(myStack.enqueueFront());
//console.log(myStack.enqueueRear());
console.log(myStack.dequeueFront());
console.log(myStack.dequeueRear());
console.log(myStack.front());
console.log(myStack.rear());
console.log(myStack.size());
console.log(myStack.isEmpty());
myStack.print();
