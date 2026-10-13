// Variables
// let name = "Kenneth"; // Using let to declare a variable
// const age = 30; // Using const to declare a constant variable
// var avoid var

// Functions
// functions help organize code into reusable blocks and perform specific tasks.

// Regular function
function add(a, b) {
  return a + b; // Returns the sum of a and b
}
console.log(add(5, 3));

// Arrow function
const subtract = (a, b) => {
  return a - b; // Returns the difference of a and b
};
console.log(subtract(10, 4));

// objects
const user = {
  name: "Kenneth",
  age: 30,
  role: "Developer",
};

console.log(user.name);
console.log(user.age);
console.log(user.role);

// Array
// store multiple values in a single variable
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits.length); // Logs the number of elements in the array

fruits.push("PineApple");
fruits.push("Mango"); // Adds another new element to the end of the array
console.log(fruits); // Logs the updated array with the new element

fruits.pop(); // Removes the last element from the array
console.log(fruits); // Logs the updated array after removing the last element

fruits.shift(); // Removes the first element from the array
console.log(fruits); // Logs the updated array after removing the first element

fruits.unshift("Strawberry"); // Adds a new element to the beginning of the array
console.log(fruits); // Logs the updated array after adding the new element to the beginning

// loops
// used to execute a block of code multiple times

// types of loops:
// for loop
// for...of loop
// while loop

// for loop it is used to execute a block of code a specific number of times
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

//while loop it is used to execute a block of code as long as a specified condition is true
// let i = 0;
// while (i < 100) {
//     console.log(i);
//     i++;
// }

// conditional statements
// used to perform different actions based on different conditions
// types of conditional statements:
// if statement
// if...else statement
// if...else if...else statement
// switch statement
// if statement example
//     const adultUser = { name: "Kenneth", age: 25 };

// if (adultUser.age >= 18) {
// console.log("user is an adult");
// } else {
// console.log("user is not an adult");
// }

const minorUser = { name: "Alice", age: 19 };
if (minorUser.age < 20) {
  console.log("user is a minor");
} else {
  console.log("user is not a minor");
}

// else if statements check for multiple conditions in sequence
const seniorUser = { name: "Bob", age: 65 };

if (seniorUser.age >= 60) {
  console.log("user is a senior");
} else if (seniorUser.age >= 18) {
  console.log("user is an adult");
} else {
  console.log("user is a minor");
}

// switch statement example it is used to execute different blocks of code based on different conditions
const userRole = "Developer";
switch (userRole) {
  case "Admin":
    console.log("user is an admin");
    break;
  case "Developer":
    console.log("user is a developer");
    break;
  case "Guest":
    console.log("user is a guest");
    break;
  default:
    console.log("user role is unknown");
}

const userStatus = "unknown";
switch (userStatus) {
  case "active":
    console.log("user is active");
    break;
  case "inactive":
    console.log("user is inactive");
    break;ss
  case "pending":
    console.log("user is pending");
    break;
  default:
    console.log("user status is unknown");
}
