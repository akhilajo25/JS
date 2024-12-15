// given an array of numbers and chunk size, return an array of arrays with the size of chunk

function chunkArray(arr, chunkSize) {
  let result = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
    console.log(i, arr.length - 1, arr[i]);
    if (tempArr.length === chunkSize || i === arr.length - 1) {
      result.push([...tempArr]);
      tempArr.length = 0;
    }
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 3));
