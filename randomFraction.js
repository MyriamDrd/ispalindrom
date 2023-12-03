var randomNumberbetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//************************************************************ */

function ourRandomRange(ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1 )) + ourMin;
}

console.log(ourRandomRange(5,8));

//promesses javascript!!!!!! à voir