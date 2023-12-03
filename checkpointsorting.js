const arr = [10, 50, 40, 2, 1];
arr.sort((x, y) => x - y);
arr.sort(compareFunction);
function compareFunction(x, y) {
  return x - y;
}

console.log(arr);
