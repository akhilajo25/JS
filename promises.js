/* Promises in JS */

// // - Handle asynchronous operations in JS

// const cart = ["shoes", "socks", "shirt"];

// creatOrder(cart); //orderID

// proceedToPayment(orderID); // only after order is placed

// // //callback approach
// // function creatOrder(cart, function (orderID){
// //     proceedToPayment(orderID)
// // });

// // -Trusting blindly to call proceed to payment after createOrder

// /* Issue with callbacks Inversion of Control */

// const promise = creatOrder(cart);

// // - When JS exectues the above line, if gives a an object like {data: undefined}

// // -After the promise is resolved, the object is updated with the data

// // We will attach a callback function to the promise

// promise.then(function (orderID) {
//   proceedToPayment(orderID);
// });

/* How promise objects look like */

const GIT_HUB_API = "https://api.github.com/users/akhilajoshi";

// fetch returns us a promise object
const promise = fetch(GIT_HUB_API);

console.log(promise); // this logs pending, but PromiseState is fullfilled

promise.then(function (data) {
  console.log(data);
});

/* States of promise only 3 */

// - pending
// - fulfilled  
// - rejected

// - promise objects are immutable

/* JS gurantees that the promise will be resolved only once either success or failure */

/* Interview Questions */

// // 1. What is promise ?
// // Container for a future value
// // Promise is an object that represents eventual completion of an async operation