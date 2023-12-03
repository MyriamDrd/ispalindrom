var library = {
  fiction: [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ],
  scienceFiction: [
    { title: "Dune", author: "Frank Herbert", year: 1965 },
    { title: "Ender's Game", author: "Orson Scott Card", year: 1985 },
    { title: "Neuromancer", author: "William Gibson", year: 1984 },
  ],
  mystery: [
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      year: 2005,
    },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  ],
};
//1
var title = library.scienceFiction[1].title;
var author = library.scienceFiction[1].author;

//2
library.mystery[0].year = 2010;

//3
library.fiction.push({
  title: "Brave New World",
  author: "Aldous Huxley",
  year: 1932,
});
let libraryCopy = JSON.parse(JSON.stringify(library));
console.log(library.mystery[0]);
console.log("The title of the second book is : ", title);
console.log("The author of the second book is : ", author);
console.log(library.fiction[3]);
console.log(library.scienceFiction[1].title);
console.log("Original Library:", JSON.stringify(libraryCopy, null, 2));

// Write a program that performs the following tasks:
// 1. Display the title and author of the second book in the "scienceFiction" genre.
// 2. Update the year of the first book in the "mystery" genre to 2010.
// 3. Add a new book to the "fiction" genre: { title: "Brave New World", author: "Aldous Huxley", year: 1932 }.

// Test your program to ensure it produces the correct output.

// Example usage:
// console.log(library.scienceFiction[1].title); // Output: Ender's Game

// Verify that the original library object is not modified
// console.log("Original Library:", JSON.stringify(libraryCopy, null, 2));
