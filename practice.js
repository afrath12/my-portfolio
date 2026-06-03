// ---- VARIABLES ----
const myName = "Your Name";
const myAge = 21;
let score = 0;

console.log(myName);     // prints in browser console
console.log(myAge);

// ---- IF / ELSE ----
if (myAge >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ---- FOR LOOP ----
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// ---- FUNCTIONS ----
function greet(name) {
  return "Hello, " + name + "!";
}

console.log( greet("Sam") );   // prints: Hello, Sam!

// ---- ARRAYS ----
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);     // apple (index starts at 0)
console.log(fruits.length); // 3

fruits.forEach(function(fruit) {
  console.log(fruit);
});

// ---- OBJECTS ----
const student = {
  name: "Your Name",
  year: 3,
  degree: "IT"
};

console.log(student.name);    // Your Name
console.log(student.year);    // 3

// 1. Write a function that takes two numbers and returns their sum
function sumnumbers( a , b) {
  return "Sum : " + (a+b)  ;
}
console.log( sumnumbers(6 ,4) );

// 2. Write a loop that prints numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("number " + i);
}
// 3. Create an array of 5 country names and print each one
const countries = ["Sri Lanka", "India", "USA", "Australia" ,"malaysia"];
countries.forEach(function(country) {
  console.log(country);
});

// 4. Create an object for yourself: name, age, university
const Developer = {
  name: "Afrath",
  age: 23,
  university: "Kelaniya"
};

console.log(Developer.name);    // Afrath
console.log(Developer.age);     
console.log(Developer.university); 
