const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

console.log("Original Array:", cars); // [ 'Saab', 'Volvo', 'BMW' ]
console.log("cars[2]:",cars[2]); // BMW

cars[0] = "Opel";
console.log(cars); // [ 'Opel', 'Volvo', 'BMW' ]

console.log("Length:", cars.length); // 3

let carStr = cars.join(' ');
console.log("Join:", carStr); // Opel Volvo BMW

let carArr = carStr.split(' ');
console.log("split:", carArr); //  [ 'Opel', 'Volvo', 'BMW' ]

cars.pop(); // remove last element
console.log("Pop:", cars); //  [ 'Opel', 'Volvo' ]

cars.push("Saab"); // add element in last
console.log("Push:", cars); // [ 'Opel', 'Volvo', 'Saab' ]

cars.shift(); // remove element from beginning
console.log("Shift:", cars); // [ 'Volvo', 'Saab' ]

cars.unshift("BMW"); // add element in beginning
console.log("Unshift:", cars); // [ 'BMW', 'Volvo', 'Saab' ]

// Slice: returns a shallow copy of a portion of an array
let slicedCars = cars.slice(1, 3);
console.log("Slice:", slicedCars); // [ 'Volvo', 'Saab' ]

// Splice: adds/removes items to/from an array, and returns the removed items
let removedCars = cars.splice(1, 1, "Audi", "Ford");
console.log("Splice (removed):", removedCars); // [ 'Volvo' ]
console.log("Splice (updated array):", cars); // [ 'BMW', 'Audi', 'Ford', 'Saab' ]

// Reverse: reverses the order of elements in an array
let reversedCars = cars.reverse();
console.log("Reverse:", reversedCars); // [ 'Saab', 'Ford', 'Audi', 'BMW' ]

// Sort: sorts elements of the array
let sortedCars = cars.sort();
console.log("Sorted:", sortedCars); // [ 'Audi', 'BMW', 'Ford', 'Saab' ]


// IndexOf: returns the index of the first occurrence of a value
let indexOfAudi = cars.indexOf('Audi');
console.log("Index of Audi:", indexOfAudi); // 0

// Find: returns the first element that satisfies a condition
let firstCarWithLetterF = cars.find(car => car.startsWith('F'));
console.log("Find car starting with 'F':", firstCarWithLetterF); // Ford

// FindIndex: returns the index of the first element that satisfies a condition
let indexOfCarStartingWithF = cars.findIndex(car => car.startsWith('F'));
console.log("FindIndex of car starting with 'F':", indexOfCarStartingWithF); // 2 (Ford)

// Flat: flattens a nested array into a single array
let nestedCars = [['BMW', 'Audi'], ['Ford', 'Saab']];
let flattenedCars = nestedCars.flat();
console.log("Flat:", flattenedCars); // [ 'BMW', 'Audi', 'Ford', 'Saab' ]

// every: tests whether all elements pass the condition
let allCarsStartWithA = cars.every(car => car.startsWith('A'));
console.log("Every car starts with 'A':", allCarsStartWithA); // false

const numbers = [5, 12, 8, 130, 44];

// Map: Creates a new array with the results of calling a function on every element
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers); // [ 10, 24, 16, 260, 88 ]

// Filter: Creates a new array with elements that pass the test
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [ 12, 8, 130, 44 ]

// Reduce: Apply a function against an accumulator and each element to reduce it to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); // 199

// Sort: Sort the array in ascending order
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted numbers (ascending):", sortedNumbers); // [ 5, 8, 12, 44, 130 ]
  
// CopyWithin: Copies a portion of the array to another position within the array
let copiedNumbers = numbers.copyWithin(1, 3);
console.log("CopyWithin (copy from index 3 to index 1):", copiedNumbers); // [ 5, 44, 130, 44, 130 ]

// Concat: Concatinated two arrays
let num = [2,55];
console.log("Concat:", numbers.concat(num)); // [5, 44, 130, 44, 130,  2,  55]
