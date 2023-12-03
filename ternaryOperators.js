// React Conditional Rendering - ternary operaters

function checkEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

function checkEqualTernary(a, b) {
  return a === b ? true : false;
}

console.log(checkEqualTernary(1,5));