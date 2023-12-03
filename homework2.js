var students = [
  { id: 1, name: "Alice", age: 20, grades: [85, 92, 78] },
  { id: 2, name: "Bob", age: 22, grades: [90, 88, 95] },
  { id: 3, name: "Charlie", age: 21, grades: [75, 80, 68] },
  { id: 4, name: "Diana", age: 23, grades: [98, 94, 88] },
];
function updateStudentInfo(ID, prop, value) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].id == ID) {
      if (students[i][prop] !== undefined) {
        students[i][prop] = value;
      } else {
        return "Proprety not found ";
      }
    }
  }
  return "student not found ";
}
//test cases
var studentsCopy = JSON.parse(JSON.stringify(students));

console.log(updateStudentInfo(2, "age", 23)); //Update age for ID 2 to 23
console.log(updateStudentInfo(3, "grades", [80, 85, 72]));
console.log(updateStudentInfo(1, "major", "computer science")); //Update age for ID 2 to 23
console.log(updateStudentInfo(5, "age", 25)); //Update age for ID 2 to 23

// verify that the original students array is not modified

console.log("Original Students:", JSON.stringify(studentsCopy, null, 2));
console.log("studentsCopy:", JSON.stringify(students, null, 2));

// Write a function called updateStudentInfo that takes the following parameters:
// - id: The ID of the student to be updated.
// - prop: The property to be updated (e.g., "name", "age", "grades").
// - value: The new value to set for the specified property.

// The function should perform the following tasks:
// 1. If the student with the given ID exists in the students array, update the value of the specified property.
// 2. If the student does not exist, return "Student not found".
// 3. If the property does not exist for the student, return "Property not found".

// Test your function with different inputs to ensure it handles these cases correctly.

// Example usage:
// console.log(updateStudentInfo(2, "age", 23)); // Update age for ID 2 to 23

// Verify that the original students array is not modified
// console.log("Original Students:", JSON.stringify(studentsCopy, null, 2));
