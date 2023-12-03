var user = {
  name: "Wael",
  lastName: "Morjen",
  age: "24",
  email: "waelmorjen@gmail.com",
  friends: ["everything"],
};
function checkProperty(checkProp) {
  if (user.hasOwnProprety(checkProp)) {
    return user[checkProp];
  } else {
    return "Notfound";
  }
}
console.log(checkProperty("daniel"));

//populet sur object!!!!!
