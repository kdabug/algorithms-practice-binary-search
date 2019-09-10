//RECURSION = make a helper function for sorting

function sortArray(arr) {
  //make sure array is Sorted (any sort method)
  if (arr.length > 1) {
    return arr.sort((a, b) => a - b);
  }
  return arr;
}
//TESTING for loop count
let count = 0;

//set defaults for parameters
function recursiveBinarySearch(
  arr,
  item,
  midPoint = Math.floor((arr.length - 1) / 2),
  start = 0,
  end = arr.length - 1
) {
  //(2)if there is only one item in the array
  if (start === end) {
    console.log(arr[midPoint] === item ? midPoint : -1);
    return arr[midPoint] === item ? midPoint : -1;
  }
  //(1)base case
  if (arr[midPoint] === item) {
    console.log(midPoint);
    return midPoint;
  } else if (arr[midPoint] < item) {
    //item is greater than midpoint
    start = midPoint + 1;
    midPoint = Math.floor((start + end) / 2);
    count++;
    console.log(`loop count: ${count}`);
    //RECURSION
    return recursiveBinarySearch(arr, item, midPoint, start, end);
  } else {
    //item is less than midpoint
    end = midPoint - 1;
    midPoint = Math.floor((start + end) / 2);
    count++;
    console.log(`loop count: ${count}`);
    //RECURSION
    return recursiveBinarySearch(arr, item, midPoint, start, end);
  }
}
let ourArray = [2, 16, 7, 8, 3, 7, 9, 52, 60, 93, 45, 27, 33, 24, 22, 21];
let sortedArray = sortArray(ourArray);
console.log(sortedArray);
recursiveBinarySearch(sortedArray, 9);
