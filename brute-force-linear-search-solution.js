//  search through the array recursively for the element
//  if the element is not found, return -1
//  if the element is found, return the index at which it was found
function bruteForceLinearSearch(arr, item) {
  let count = 0; //efficiency check
  for (let i = 0; i < arr.length; i++) {
    count++;
    console.log(`loop ${count}`);
    if (arr[i] === item) {
      console.log(i);
      return i;
    }
  }
  console.log(-1);
  return -1;
}

let ourArray = [2, 16, 7, 8, 3, 7, 9, 52, 60, 93, 45, 27, 33, 24, 22, 21];
bruteForceLinearSearch(ourArray, 10);
