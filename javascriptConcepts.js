// javascript

// JavaScript is a high-level, often just-in-time compiled language 
// that conforms to the ECMAScript standard. It has dynamic typing, 
// prototype-based object-orientation, and first-class functions. 
// It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.




// is a
// 1) high-level
// 2) just-in-time compiled

// conforms to 
// 3) ECMAScript Standard

// it has
// 4) Dynamic typing
// 5) Prototype based object-orientation
// 6) first-class functions

// it is
// 7) multi-paradigm

// supporting
// 8)  event-driven
// 9)  functional
// 10) imperative 
// programming style  





// high-level
//===========

// JavaScript is a high-level language because it provides a user-friendly and human-readable syntax,
// abstracts away low-level details, automatically handles memory management, and is platform-independent. 
// It uses English-like keywords, doesn't require manual memory management, runs on different operating systems, 
// and comes with built-in functionality and libraries.




// Just-in-time compiled 
// =====================

// JavaScript is often referred to as a "just-in-time compiled" language because it utilizes a just-in-time (JIT) 
// compiler during runtime. When a JavaScript program is executed, the JIT compiler dynamically compiles the code on the fly, 
// optimizing it for performance.

// JavaScript is a just-in-time compiled language because, unlike traditional compiled languages that compile the entire program 
// before execution, JavaScript is compiled at runtime. The JavaScript engine, such as V8 in Chrome or SpiderMonkey in Firefox, 
// contains a JIT compiler that translates JavaScript code into machine code just before it is executed.




// ECMAScript standard
// ===================

// JavaScript is ECMAScripted because it adheres to the ECMAScript standard. ECMAScript provides a specification for the syntax
// and behavior of the scripting language, and JavaScript is one of the popular implementations of this standard. The ECMAScript 
// standard evolves over time, and different JavaScript engines support the language features defined by the ECMAScript versions.




// Dynamic Typing
// ==============

// JavaScript is considered a dynamically typed language because variable types are determined at runtime rather than being
// explicitly declared. This allows for flexibility in assigning different types of values to variables and performing operations
// without strict type constraints.




// first-class functions
// =====================

// In JavaScript, having "first-class functions" means that functions are treated as values and can be assigned to variables,
// passed as arguments to other functions, and returned as values from functions. This concept allows for more flexibility and
// powerful programming paradigms such as functional programming and higher-order functions.




// multi-paradigm
// ==============

// JavaScript is considered a multiparadigm programming language because it supports multiple programming paradigms, 
// allowing developers to use different approaches and styles of programming based on their needs. JavaScript can be used in
// imperative, object-oriented, and functional programming paradigms, among others.




// supporting event-driven
// =======================

// JavaScript supports event-driven programming through its built-in mechanisms and APIs for handling events and asynchronous 
// operations. Event-driven programming is a paradigm where the flow of the program is determined by events, such as user actions
// or system events, and the associated event handlers.




// functional
// ==========

// JavaScript supports functional programming concepts, making it a functional programming language. Functional programming is a
// programming paradigm that emphasizes the use of pure functions, immutability, and higher-order functions to solve problems by 
// composing functions and transforming data.




// imparative programming Style
// ============================

// JavaScript supports imperative programming, which is a programming paradigm that focuses on specifying step-by-step instructions
// for the computer to execute. In imperative programming, the programmer explicitly defines the sequence of operations to 
// manipulate the program state and control flow.


//==============================================================================================================================

// javascript list of features:
//-----------------------------


// Variables
// let
// var
// const

// Data Struchers
// Arrays
// Objects
// array of objects
// destruchering arrays
// destruchering objects

// Loops
// for 
// while
// do while
// for in
// for of
// foreach
// map

// Operators
// arithemetic operators
// assignment operators
// comparision operators
// conditional operators
// logical operators
// ternery operators    
// rest operator
// spread operator

// Control Statements
// if 
// if else
// elseif

// Functions
// function defination
// function arguments
// return statement
// Arrow functions
// function expression
// IIFE function
// generator function
// higher order functions

// Event handling
// Onclick     
// Onchange
// Onmouseover
// Onmouseover

// Modules
// export
// import
// as
// * as    
// default

// Asynchronous Programming
// Callbacks
// Promises
// Async/Await

// AJAX
// xmlhttprequest

// Fetch Api    

// Error handling
// try
// catch
// finally
// throw    

//============================================================================================================================= 

// Variables
// =========

// In JavaScript, variables are used to store and manipulate data. They are containers that hold values, and these values can be
// changed or reassigned during the execution of a program.

var age;          // Variable declaration using var
let name;         // Variable declaration using let
const PI = 3.14;  // Variable declaration using const

var age = 30;             // Number
let names = "John";       // String
const isStudent = true;   // Boolean
let person = {            // Object
    name: "John",
    age: 30
};
let numbers = [1, 2, 3, 4, 5]; // Array

// Scope: JavaScript variables have different scopes, depending on how they are declared. Variables declared with var have 
// function scope, meaning they are accessible within the function they are declared in, or globally if declared outside any 
// function. Variables declared with let and const have block scope, meaning they are limited to the block they are declared 
// in (e.g., inside a loop or conditional statement).

// Hoisting: In JavaScript, variable declarations using var are hoisted to the top of their scope. This means you can access a
// variable before it is declared, although its value will be undefined until the assignment. Variables declared with let and
// const are also hoisted but are not initialized until their actual declaration.




//==============================================================================================================================

// Data Struchers
// ============== 

// In JavaScript, data structures are used to organize and manipulate data efficiently. JavaScript provides several built-in data 
// structures that allow you to store, access, and manipulate data in different ways




// Arrays:
//--------

// Arrays are ordered collections of elements. They can store multiple values of any data type, including numbers, 
// strings, objects, and other arrays. Arrays in JavaScript are dynamically sized and can be modified by adding or removing 
// elements.

let numbersIn = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];




// Objects:
//---------

// Objects are key-value pairs that represent a collection of properties. Each property consists of a key 
// (or property name) and a corresponding value. Objects in JavaScript are widely used to represent complex data structures.

let persons = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Stack: A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. It allows you to add and remove elements
// only from the top of the stack.

// Queue: A queue is a data structure that follows the First-In-First-Out (FIFO) principle. It allows you to add elements at the 
// rear and remove elements from the front.

// Linked List: A linked list is a data structure that consists of nodes, where each node holds a value and a reference to the next
// node. Linked lists provide efficient insertion and deletion operations.






// Arrays of objects:
//------------------- 

// In JavaScript are simply arrays where each element in the array is an object. Instead of storing single values
// like numbers or strings, each element in the array is a complex data structure represented by an object.

let students = [
    { name: "John", age: 20, grade: "A" },
    { name: "Jane", age: 22, grade: "B" },
    { name: "Alex", age: 21, grade: "A+" }
];




// Destructuring an array:
//------------------------

// in JavaScript allows you to extract values from an array and assign them to variables in a more concise
// and convenient way. It provides a shorthand syntax to unpack elements from an array into separate variables.

let numOne = [1, 2, 3, 4, 5];

let [a, b, ...rest] = numbers;

console.log(a);     // Output: 1
console.log(b);     // Output: 2
console.log(rest);  // Output: [3, 4, 5]

// In this case, the first two elements of the numbers array are assigned to a and b respectively. The rest of the elements are 
// captured in the rest variable using the rest syntax (...). This creates a new array containing the remaining elements [3, 4, 5].






// Destruchering an Object:
//-------------------------

// Object destructuring in JavaScript allows you to extract values from an object and assign them to variables in a more concise
// and convenient way. It provides a shorthand syntax to unpack properties from an object into separate variables.

let persona = {
    naming: "John",
    age: 30,
    city: "New York"
};

let { naming, age, city } = person;

console.log(naming);  // Output: "John"
console.log(age);     // Output: 30
console.log(city);    // Output: "New York"

// Object destructuring also allows you to assign values to variables with different names:

let personing = {
    named: "John",
    age: 30,
    city: "New York"
};

let { named: fullName, age: personAge, city: location } = personing;

console.log(fullName);      // Output: "John"
console.log(personAge);     // Output: 30
console.log(location);      // Output: "New York"

// In this example, we are assigning the value of the name property to the variable fullName, the value of the age property to
// personAge, and the value of the city property to location.This allows you to use different variable names while destructuring an object.



//==============================================================================================================================