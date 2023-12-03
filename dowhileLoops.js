var myArray = [];
var i = 4;

do {
  myArray.push(i);
  i++;
} while (i <= 5);
// test 1 seule fois si la condiction est fausse --> sortir du boucle // while : si la condition est fausse ne teste aucune fois sortir directement du boucle

console.log(i, myArray);
