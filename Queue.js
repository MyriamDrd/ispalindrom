function Queue() {
  //collection to store elements
  var collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  //method to remove and return the element from the
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  // methods to get  the current size of the queue
  this.size = function () {
    return collection.length;
  };
  //Methods to check if the is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// Implementing methods
//var myQueue = new Queue();
//myQueue.enqueue(1);
//myQueue.enqueue(2);
////myQueue.enqueue(3);
//myQueue.print();
//console.log(myQueue.dequeue()); // output : 1
//console.log(myQueue.front()); // output : 2
//console.log(myQueue.size()); // output : 2
//console.log(myQueue.isEmpty()); // output : false

/*
Write a JavaScript class representing a Stack. The class should have the following methods:

1.push(element): Adds the given element to the top of the stack.
2.pop(): Removes and returns the element from the top of the stack.
3.top(): Returns the element at the top of the stack without removing it.
4.isEmpty(): Returns true if the stack is empty, and false otherwise.
5.size(): Returns the number of elements in the stack.
6.print(): Prints the elements of the stack.

Implement the class and demonstrate its usage with a few stack operations. 
*/
// EXERCICE
var Stack = function () {
  var collection = [];

  this.push = function (element) {
    collection.push(element);
  };
  this.pop = function () {
    return collection.shift();
  };
  this.top = function () {
    return collection[0];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.size = function () {
    return collection.length;
  };
  this.print = function () {
    console.log(collection);
  };
};
// Testing our implementation
/**var myStack = new Stack();
myStack.push("2");
myStack.push("4");
myStack.push("5");
myStack.push("6");
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.top());
console.log(myStack.isEmpty());
console.log(myStack.size());
myStack.print();**/

//course

function PriorityQueue() {
  var collection = [];

  // Method to add an element to the priority queue based on priority
  this.enqueue = function (element) {
    // If the priority queue is empty, simply push the element
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      // Iterate through the elements to find the correct position based on priority
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          // Insert the element at the correct position
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      // If the element has the highest priority, push it to the end
      if (!added) {
        collection.push(element);
      }
    }
  };

  // Method to remove and return the element with the highest priority
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };

  // Method to view the element with the highest priority without removing it
  this.front = function () {
    return collection[0];
  };

  // Method to get the current size of the priority queue
  this.size = function () {
    return collection.length;
  };

  // Method to check if the priority queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

//implementation
const MyPriorityQueue = new PriorityQueue();

console.log(MyPriorityQueue.enqueue(["task 1", 3]));
console.log(MyPriorityQueue.enqueue(["task 2", 1]));
console.log(MyPriorityQueue.enqueue(["task 3", 2]));
console.log(MyPriorityQueue.front());
console.log(MyPriorityQueue.size());
console.log(MyPriorityQueue.isEmpty());
