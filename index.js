/*------Temporal Dead zone----*/
// // 1. index.js:2 Uncaught ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 10;
// var b = 100;

// // 2. 10 is printed for a in console, the first code did not work because a which is a let variable
// // is not accessible before initialization since it was in temporal dead zone
// // Temporal dead zone = time when variable is hoisted - when the variabble is initialized
// let a = 10;
// console.log(a);
// var b = 100;

// // 3. undefined is printed for b in console
// console.log(b);
// let a = 10;
// var b = 100;

// // 4. Uncaught SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// let a = 100;
// let a = 10;
// var a = 101;

// // 5. Prints 10 for a in console, let variable allows to initialize later anywhere in the code
// let a ;
// a = 10;
// console.log(a);

// // 6. Uncaught SyntaxError: Missing initializer in const declaration
// const a;
// a = 10;

// // 7. Prints 10 for a in console
// const a = 10;
// console.log(a);

// // 8. Uncaught TypeError: Assignment to constant variable.
// const a = 10;
// a = 1000;

/*------Notes----*/

// Three Types of Errors
// reference Error|
// syntax Error|
// type Error|
// Out of three variables, order of usage const -> let -> var
// If you are not redeclaring a variable, you can use const
// Pushing all initialization to the top of the code, can avoid unexpected errors

/*------Block Scope and Shadowing----*/

// // 1. What is block in JS?
// // Block is a set of statements surrounded by curly braces {}, even just {} is a block

// // Why do we need block?
// // We group multiple statements together, so that we can use it where javascript
// // expects only one statement

// if(true)true; is perfectly valid

// Prints 20 in console
// if(true)
// {
//   let a = 20;
//   console.log(a);
// }

// Namaste JS :  Episode: 9
// // What is block scope?
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log("A inside block scope", a); // this will run
//   console.log("B inside block scope", b); // this will run
//   console.log("C inside block scope", c); // this will run
// }
// console.log("A outside block scope", a); // this will run
// console.log("B outside block scope", b); // throw error uncaught reference error
// console.log("C outside block scope", c); // since last line threw error, this will not run

// // in the aboce example, a, b, c are block scoped variables, but a is allocated memory in
// // global scope, so it is accessible outside the block. But b and c are not accessible
// // outside the block

/*------Shadowing----*/

// // 1. What is shadowing?
// // Shadowing is when a variable in a child scope has the same name as a variable in a parent scope
// var a = 100;
// let b = 200;
// {
//   var a = 10;
//   console.log("a inside block scope", a); // this will run
//   let b = 20;
//   console.log("b inside block scope", b); // this will run
// }
// console.log("a outside block scope", a); // this will run and print 10 because a outside was shadowed by a inside block
// console.log("b outside block scope", b); // this will print 200 because b in block is destroyed after the block ends

// //Shadowing not only happens in block scope, but also in function scope
// var a = 100;
// let b = 200;
// const c = 300;
// function shadowing() {
//   var a = 10;
//   console.log("a inside function shadowing", a); // this will run
//   let b = 20;
//   console.log("b inside function shadowing", b); // this will run
//   const c = 30;
//   console.log("c inside function shadowing", c); // this will run
// }
// shadowing();
// console.log("a outside function shadowing", a); // this will run and print 100 because a inside function was destroyed after the function ends
// console.log("b outside function shadowing", b);
// console.log("c outside function shadowing", c);

/*------Valid shadowing----*/

// var a = 100;
// {
//   let a = 200;
//   console.log(a);
// }
// console.log(a);

// let a = 100;
// {
//   let a = 200;
//   console.log(a);
// }
// console.log(a);

/*------Illegal Shadowing----*/

// // Uncaught SyntaxError: Identifier 'a' has already been declared
// let a = 200;
// {
//   var a = 10;
// }

/*------Lexical Scope----*/

// const a = 10;
// {
//   const a = 20;
//   {
//     const a = 30;
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);

/* ------Closures----*/

// // 1. What is closure?
// // Closure is a function along with its lexical environment

/*- In JS, you can pass function as parameter to another function
- You can also return function from another function
- Assigning a function to a variable
*/

// Uses of Closures
// - Module Design Pattern
// - Currying
// - Memoization
// - Functions like once
// - memoization
// - Maintaining state in async world
// - setTImeOuts
// - iterators
// - data hiding and encapsulation
// ..... many more

// disadvantages of closures
// 1. Memory leaks -- can freeze browser

// // Example for closure

// const a = () => {
//   var a = 10;
//   const b = () => {
//     console.log(a);
//     return a;
//   };
//   return b;
// };
// var c = a();
// console.log(c);
// c();

// function x() {
//   let a = 100;
//   function y() {
//     console.log(a);
//     return a;
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// z();

// Gotchaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// // 1.
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//     return a;
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// // 2.
// function z() {
//   var b = 900;
//   const c = 2000;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b, c);
//       return a;
//     }
//     y();
//   }
//   x();
// }
// z();

// // 3.
// function first() {
//   var a = 10;
//   function second() {
//     let c = 20;
//     console.log(a, c);
//   }
//   return second;
// }

// var third = first();
// console.log(third);
// third();

/* ------Interview Question - Closures----*/
// // 1. What is the output of the following code?
// function a() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// a();
// // O/P: 1 is printed in console after 1 second

// // 2. What is the output of the following code?
// function a() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
//   console.log("Helllo World");
// }
// a();
// // O/P: First "Hello World" is printed in console, then 1 is printed in console after 1 second

/* Time tide and JS wait for none - SetTimeout
 - setTimeout forms a closure, so it has access to the variables in its scope
 - setTimeout takes this callback function and sets a timer to it
 - The control moves to the next line and Hello World is printed in console
 - After timer expires, the callback function is executed and 1 is printed in console
*/

// // 3. What is the output of the following code?
// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// // O/P: 6 is printed 6 times, because closure has the reference of i -- How to fix this using using var?

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function b(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     b(i);
//   }
// }
// a(); // this prints 1,2,3,4,5 in console

// // 4. What is the output of the following code?
// function a() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();
// // O/P: 0,1,2,3,4,5 is printed because let is block scoped

/* ------Crazy JS Interview Questions----*/
// // 1. Garbage Collector is a program that frees memory occupied by unused variables

// // 2. How are garbage collectors related to closures?

/* ------First Class Functions----*/
// // 1. What is an anonymous function?
// // Anonymous function is a function without a name, anonymus functions are used when functions are used as value
// const a = function () {
//   console.log("Hello World");
// };

// // 2. What is a first class functions?
// // The ability to use functions as values is called first class functions
// Ex. 1
function a(param) {
  console.log(param);
}

a(function () {
  console.log("Passing a function as a argument");
});

// Ex. 2

function a() {
  return function () {
    console.log("returning a function");
  };
}
console.log(a());

// // 3. What is a named function expression?
// var a = function xyz() {
//   console.log("Hello World");
// };
// a();  // works fine
// xyz();  // will throw error because xyx is not defined

/* What is a difference between fucntion expression and fucntion statement?
The difference is hoisting, if you call 
b(); // will throw error because b is not a function as of now there is stored in b during memory allocation phase
a();

4. What is a fucntion expression?
var b = function () {
  console.log("Hello World");
};
b();

4. What is a function statement?
function a() {
  console.log("Hello World");
}
a();
*/

// // 5. What is a fucntion declaration?
// // function declaration is same as function statement

// // 6. What is a fucntion parameter?
// // function parameter is a variable that is recieved by the function (a, b)

// // 7. What is a fucntion argument?
// // function argument is a variable that is passed to a function (1,2)

// function addition(a, b) {
//     return a + b;
//   };

//   addition(1,2)

/* ------CallBack functions in JS----*/
