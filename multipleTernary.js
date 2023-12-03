function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "négative" : "Zéro";
}

console.log(checkSign(10));
// output: positive
console.log(checkSign(5));
// output: positive
console.log(checkSign(-1));
// output: positive
