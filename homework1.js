var inventory = [
  { id: 1, name: "Laptop", quantity: 10, price: 899.99 },
  { id: 2, name: "Smartphone", quantity: 20, price: 499.99 },
  { id: 3, name: "Headphones", quantity: 30, price: 79.99 },
  { id: 4, name: "Tablet", quantity: 15, price: 299.99 },
];
function getItemInfo(ID, prop) {
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].id == ID) {
      return inventory[i][prop] || "Proprety not found";
    }
  }
  return "Item not found";
}
console.log(getItemInfo(2, "quantity"));
console.log(getItemInfo(4, "Price"));
console.log(getItemInfo(2, "name"));
console.log(getItemInfo(5, "quantity"));
console.log(getItemInfo(2, "number"));
// Write a function called getItemInfo that takes the following parameters:
// - id: The ID of the item to retrieve information for.
// - prop: The property to retrieve information about (e.g., "name", "quantity", "price").

// The function should perform the following tasks:
// 1. If the item with the given ID exists in the inventory, return the value of the specified property.
// 2. If the item does not exist, return "Item not found".
// 3. If the property does not exist for the item, return "Property not found".

// Test your function with different inputs to ensure it handles these cases correctly.

// Example usage:
// console.log(getItemInfo(2, "quantity")); // Output: 20

// Verify that the original inventory is not modified
// console.log("Original Inventory:", JSON.stringify(inventory, null, 2));
