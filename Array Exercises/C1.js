function countByarry(arr) {
  return arr.reduce((count_char, index) => {
    count_char[index] = (count_char[index] || 0) + 1;
    return count_char;
  }, {});
}

const items = ["a", "b", "a", "c", "a"];

const a = countByarry(items);

console.log(a)
