//in this example, we'll implement a recursive function to calculate the factorial of a given number

// factorial is the product of all positive integers up to a given number.
// the factorial of 5 (writtent 5!)is calculated as 5*4*3*2*1.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// example usage:
var result = factorial(5);
console.log("Factorial of 5:", result); //output 120

// recursive method

function factorial(n) {
  //base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    //recursive case : n! = n*(n-1)

    return n * factorial(n - 1);
  }
}
// example usage :
var result = factorial(5);
console.log("Factorial of 5:", result); //output 120
