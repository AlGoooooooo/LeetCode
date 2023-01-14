const peakIndexInMountainArray = (arr: number[]): number | undefined => {
  if (arr.length === 3) return 1;

  let leftIndex: number = 0;
  let rightIndex: number = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex: number = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[midIndex] > arr[midIndex - 1] && arr[midIndex] > arr[midIndex + 1]) {
      return midIndex;
    }

    if (arr[midIndex] < arr[midIndex + 1]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return undefined;
};
