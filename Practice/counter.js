function createCounter() {
  let count = 0;
  return () => ++count;
}
const c1 = createCounter();
const c2 = createCounter();
console.log(c1(), c1(), c2(),c2(),c1()); // Output: 1, 2, 1, 2, 3