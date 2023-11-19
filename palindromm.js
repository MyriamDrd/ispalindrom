
var letters = [];
var word = "Kayak";
var rword = "";

for (i = 0; i < word.length; i++) {
  letters.push(word[i]);
}


for (i = 0; i < word.length; i++) {
  rword += letters.pop();
}


if ((rword == word) || (word =="") || (word.length==0) ){
  console.log( rword, "is a palindrom");
} else {
  console.log( rword, "is not a palindrom");
}
