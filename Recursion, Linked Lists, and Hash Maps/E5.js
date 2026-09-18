function mostFrequentElement(arr) {
  if (arr.length === 0) return null;

  const count = new Map();
  let maxCount = 0;
  let mostFrequent = arr[0];

  for (const num of arr) {
    const currentCount = (count.get(num) ?? 0) + 1;
    count.set(num, currentCount);

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2, 1])); 
console.log(mostFrequentElement(["apple", "banana", "apple"])); 