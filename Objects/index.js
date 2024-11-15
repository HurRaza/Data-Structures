const users = {
  firstName: "Alice",
  lastName: "Jone",
  age: 28,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("Full Name:", users.fullName()); // Alice Jone

// Accessing object properties
console.log("First Name:", users.firstName); // Alice
console.log("Last Name:", users.lastName); // Jone
console.log("Age:", users.age); // 28

// Modify object properties
users.age = 29;
console.log("Updated Age:", users.age); // 29

// Adding a new property
users.city = "Wonderland";
console.log("City:", users.city); // Wonderland

// Delete a property
delete users.city;
console.log("After deleting city:", users); // city property removed

// Object.keys: Get an array of keys from the object
let keys = Object.keys(users);
console.log("Object Keys:", keys); // ['firstName', 'lastName', 'age', 'fullName']

// Object.values: Get an array of values from the object
let values = Object.values(users);
console.log("Object Values:", values); // ['Alice', 'Jone', 29, function]

// Object.entries: Get an array of key-value pairs
let entries = Object.entries(users);
console.log("Object Entries:", entries);
// [['firstName', 'Alice'], ['lastName', 'Jone'], ['age', 29], ['fullName', function() {...}]]

// Using destructuring to extract specific properties
const { firstName, lastName, age } = users;
console.log("Destructured values:", firstName, lastName, age); // Alice Jone 29

// Adding another object (address)
const address = {
  city: "New York",
  country: "USA",
};

// Using Object.assign to merge objects
const personWithAddress = Object.assign(users, address);
console.log(personWithAddress);
// Output: { firstName: 'Alice', lastName: 'Jone', age: 29, fullName: function, city: 'New York', country: 'USA' }
