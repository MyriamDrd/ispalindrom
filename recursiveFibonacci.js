//the Fibonacci sequence is a series of number s where each number is the sum of two preceding ones,usually starting with 0 and 1
// Given an index n, your task is to return the nth element in the Fibonacci  sequence. For example:

function FibonacciNonRecursive(n) {
  if (n <= 1) {
    return n;
  }
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}
//example usage :

var resultNonRecursive = FibonacciNonRecursive(6);
console.log("Fibonacci (Non-Recursive) of 6:", resultNonRecursive); //Output:8

//Recursive Method :
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//Example usage:

var resultRecursive = fibonacciRecursive(6);
console.log("Fibonacci (Recursive) of 6 :", resultRecursive); //Output 8
