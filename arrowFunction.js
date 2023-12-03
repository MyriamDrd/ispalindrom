//--> function normal
var magic = function () {
  return new Date();
};

//--> arrow function
var magicArrow = () => {
  return new Date();
};

var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};
var myConcatArrow = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(magic());
console.log(myConcatArrow(["1", "2", "3"], ["2", "3", "4"]));
