function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

// Example usage:
const numbers = [2, 5, 2, 8, 2, 4];
console.log(countOccurrences(numbers, 2)); // Output: 3