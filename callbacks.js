/* Callback functions in JS & Event listeners */
console.log("/* Callback functions in JS & Event listeners */");

/* 1. What is a callback function? */
// - functions are first class citizens in JS, this means that
// they can be passed to other functions as arguments
// they help in writing asynchronous code in JS
// - This function which is passed as an argument is called callback function

// Ex.1
// function aFunction(callback) {
//   callback();
// }
// aFunction(function () {
//   console.log("Hello World");
// });

/* How to know how many times a button is clicked? */

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("click").addEventListener("click", function xyz() {
//     console.log("Button clicked ", ++count);
//   });
// }
// attachEventListener();

/* ------Event loop------*/
// Ex.1

// function a() {
//   console.log("a");
// }
// a();
// console.log("End of Program");

// - Whenever a js program is run a global execution context is created
// - This global exection context is then put inside a call stack
// - The code is run line by line inside the Global Execution Context
// - Whenever program encounters a function call, a new execution context is created
// - The execution context is then put inside the call stack
// - The execution context is then popped out of the call stack after the function is done executing
// - After the program is executed, the global execution context is also popped out of the call stack
// - The job of callstack is to execute whatever comes to it, it does't wait for anything

// Web APIs - super powers of browser
// setTimeout()
// DOM APIs
// fetch()
// localStorage

// callStack is inside JS Engine
// JS engine is inside browser
// browser has timer, local storage, cookies, etc
// For JS program to be able to use the webAPIs, it needs to make use of window object. But, since
// window object is not available in the global scope, we don't need to say window.setTimeout() /
// window.console.log() etc

// Ex.2
console.log("start");
setTimeout(function cb() {
  console.log("Hello World");
}, 5000);
console.log("end");

/*
- first a global execution context is created
- then start is printed in console
- when the program reaches setTimeout, a callback is registered with the browser and starts timer of 5000 ms
- Js program moves to next line and end is printed in console
- Since the program has reached the end and has nothing to execute, GEC is popped out of the call stack
- As soon as the timer expires, and since we know that all of js code is executed in call stack
- we need to bring callback function inside the call stack
- here comes into picture the event loop and callback queue
- so when the timer expires, the callback function is put inside the callback queue
- The Job of event loop is to check the callback queue and push into the call stack
*/

/* Event Loop 

- has only one job to continuously check callstack and callback queue and executes the callback functions

Why do we need a callback queue?
- 

What is a microtask queue?
- Similar to callback queue
- has higher priority than callback queue
*/

// Disadvantages of callback functions
/* 1. Callback hell */
/* 2. Inversion of Control */