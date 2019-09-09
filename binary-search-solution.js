function binarySearch(arr, item) {
  //make sure array is Sorted (any sort method)
  if (arr.length > 1) {
    arr.sort((a, b) => a - b);
  }
  console.log(arr);
  //establish start and endpoints
  let start = 0;
  let end = arr.length - 1;
  //establish midpoint
  let midPoint = Math.floor((start + end) / 2);

  //while loop ->
  //check if midPoint is item
  //or if there are no more items to check in array

  while (arr[midPoint] !== item && start < end) {
    if (item < arr[midPoint]) {
      //item is less than midpoint
      //change end position
      end = midPoint - 1;
      console.log("item is less than midPoint change end to", end);
    } else {
      //item is greater than midpoint
      //change start position
      start = midPoint + 1;
      console.log("item is more than midPoint - change start to", start);
    }
    //establish new midPoint
    console.log("no match - we are searching through the array again");
    midPoint = Math.floor((start + end) / 2);
  }
  //return midPoint if it is value or -1 if it is not
  console.log(arr[midPoint] !== item ? -1 : midPoint);
  return arr[midPoint] !== item ? -1 : midPoint;
}
let ourArray = [2, 16, 7, 8, 3, 7, 9];
binarySearch(ourArray, 9);
