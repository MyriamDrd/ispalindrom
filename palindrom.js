var letters = [];
var word = "";
var rword = "";

for (i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
for (i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (rword === word || word == "" || word.indexOf == 0) {
  console.log("it is a palindrom");
} else {
  console.log("it is not a palindrom");
}
