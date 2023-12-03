var musicLibrary = {
  1001: {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    genre: "Progressive Rock",
    year: 1973,
  },
  2002: {
    title: "Abbey Road",
    artist: "The Beatles",
    genre: "Rock",
    year: 1969,
  },
  3003: {
    title: "Kind of Blue",
    artist: "Miles Davis",
    genre: "Jazz",
    year: 1959,
  },
  4004: {
    title: "Rumors",
    artist: "Fleetwood Mac",
    genre: "Pop Rock",
    year: 1977,
  },
};
var musicLibraryCopy = JSON.parse(JSON.stringify(musicLibrary));

function updateMusicLibrary(id, prop, value) {
  if (value === "") {
    delete musicLibrary[id][prop];
  } else if (prop === "year" && isNaN(value)) {
    return;
  } else {
    musicLibrary[id][prop] = value;
  }
  return musicLibrary;
}
//test cases
console.log(updateMusicLibrary("1001", "genre", "Psychedelic Rock"));
console.log(updateMusicLibrary("3003", "year", 1960));
console.log(updateMusicLibrary("4004", "artist", ""));
console.log(updateMusicLibrary("2002", "year", "Nineteen Sixty-Nine"));
// verify that the original music library is not modified
console.log(
  "Original Music Library:",
  JSON.stringify(musicLibraryCopy, null, 2)
);

console.log("Updated Music Library:", JSON.stringify(musicLibrary, null, 2));
// Keep a copy of the music library for tests
//var musicLibraryCopy = JSON.parse(JSON.stringify(musicLibrary));

// Write a function called updateMusicLibrary that takes the following parameters:
// - id: The ID of the music entry to be updated.
// - prop: The property to be updated (e.g., "title", "artist", "genre", "year").
// - value: The new value to set for the specified property.

// The function should perform the following tasks:
// 1. If the value is an empty string, delete the specified property from the object with the given ID.
// 2. If the property is "year" and the value is not a valid number, do not update the property.
// 3. Otherwise, update the specified property for the object with the given ID to the new value.

// Test your function with different inputs to ensure it handles these cases correctly.

// Example usage:
// console.log(updateMusicLibrary("2002", "genre", "Psychedelic Rock")); // Update genre for ID 2002 to "Psychedelic Rock"

// Verify that the original music library is not modified
// console.log("Original Music Library:", JSON.stringify(musicLibraryCopy, null, 2));
// console.log("Updated Music Library:", JSON.stringify(musicLibrary, null, 2));
