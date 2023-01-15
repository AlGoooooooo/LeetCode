/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);
    if (k < arr.length - pivotIndex) return quickSelect(arr, pivotIndex + 1, end, k);
    if (k > arr.length - pivotIndex) return quickSelect(arr, start, pivotIndex - 1, k);
    return arr[pivotIndex]; // 현재 배열의 길이와 pivot의 위치가 동일할때
};

function partition(arr, start, end) {
     // 가장 크거나 가장 작은 경우를 피할 수 있는 가장 좋은 선택지는 랜덤한 요소의 피벗을 사용합니다. 
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    // 피벗보다 작은 숫자를 왼쪽으로 가장 큰 숫자를 오른쪽으로 이동 시킴
    while(i <= j) {    
        while (arr[i] < pivot) i += 1;
        while (arr[j] > pivot) j -= 1;

        if(i <= j) {
            [arr[i],arr[j]] = [arr[j], arr[i]]
            i += 1;
            j -= 1;
        }   
    }
    [arr[i],arr[end]] = [arr[end],arr[i]]
    return i;
