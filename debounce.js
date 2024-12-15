/* debouncing */

// - Used to make api calls afte a certain time of user having typed

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function print(input) {
  console.log(input);
}

const printDebounced = debounce(print, 1000);
printDebounced("A");
printDebounced("AB");
printDebounced("ABC");
printDebounced("ABCD");
