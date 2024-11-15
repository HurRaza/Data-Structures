// Create a new Set
const numbers = new Set([1, 2, 3, 4, 5]);

// Display the Set
console.log("Initial Set:", numbers); // Set { 1, 2, 3, 4, 5 }

// Add elements to the Set
numbers.add(6);
numbers.add(7);
console.log("Adding 6 and 7:", numbers); // Set { 1, 2, 3, 4, 5, 6, 7 }

// Try to add a duplicate element (this won't work because Sets don't allow duplicates)
numbers.add(3);
console.log("Add 3 again:", numbers); // Set { 1, 2, 3, 4, 5, 6, 7 }

// Checking if an element exists in the Set
console.log("Does the Set contain 3?", numbers.has(3)); // true
console.log("Does the Set contain 8?", numbers.has(8)); // false

// Get the size of the Set
console.log("Size of the Set:", numbers.size); // 7

// Delete an element from the Set
numbers.delete(4);
console.log("Set after deleting 4:", numbers); // Set { 1, 2, 3, 5, 6, 7 }

// Checking the size after deletion
console.log("Size after deletion:", numbers.size); // 6

// Clear the entire Set
numbers.clear();
console.log("Set after clearing:", numbers); // Set {}
console.log("Size after clearing:", numbers.size); // 0
