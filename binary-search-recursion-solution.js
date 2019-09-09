function recursiveBinarySearch(
  arr,
  item,
  midPoint = Math.floor(arr.length - 1) / 2,
  start = 0,
  end = arr.length - 1
) {
  if (start === end) {
    return arr[midPoint] === item ? midPoint : -1;
  }
  if (arr[midPoint] === item) {
    return midPoint;
  } else if (arr[midPoint] < item) {
    start = midPoint + 1;
    midPoint = Math.floor((start + end) / 2);
    return recursiveBinarySearch(arr, item, midPoint, start, end);
  } else {
    end = midPoint - 1;
    midPoint = Math.floor((start + end) / 2);
    return recursiveBinarySearch(arr, item, midPoint, start, end);
  }
}
