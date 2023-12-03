// concept harryPotter
//parseint:string to number
//tostring:number to string

var contact = [
  {
    firstName: "Harry",
    LastName: "Potter",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Tennis"],
  },
  {
    firstName: "Ronald",
    LastName: "Weasley",
    number: "0987654321",
    likes: ["Hogwarts", "Magic", "Quidditch"],
  },
  {
    firstName: "Luna",
    LastName: "Lovegood",
    number: "0123456789",
    likes: ["Gardening", "Animals", "Mythology"],
  },
  {
    firstName: "Albus",
    LastName: "Dumbledore",
    number: "0765432109",
    likes: ["Wizard chess", "History", "Theory of Magic"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].firstName === name) {
      return contact[i][prop] || "no such proprety";
    }
  }
  return "no such contact";
}

var data = lookUpProfile("Harry", "likes");

console.log(data); // output: Pizza; Coding,Tennis

//.sort
//.asyc-await
//callback
//highorderedfunction-componend:hooc -hoof
