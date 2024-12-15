const count = (() => {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  inner.reset = function () {
    counter = 0;
    return counter;
  };
  return inner;
})();

console.log(count()); // this will print 1
console.log(count()); // this will print 2
console.log(count()); // this will print 3
console.log(count.reset()); // this will print 0

console.log(count()); // this will print 1
