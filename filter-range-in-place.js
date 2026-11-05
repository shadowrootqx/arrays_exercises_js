// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
// removes from it all values except those that are between a and b. The test is: 
// a ≤ arr[i] ≤ b. The function should only modify the array. It should not return 
// anything.
// Arrays should always be looped over starting from the end when using splice()
// since deleting elements leads to all elements moving to the left and causing loops 
// to skip indexes.

function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let item = arr[i];
        if (item < a || item > b) {
            arr.splice(i, 1);
        }
    }
}