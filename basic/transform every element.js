//map — transform every element
const prices = [10, 20, 30, 40, 50];
const withvat = prices.map((u) => u+5);
console.log(prices);
console.log(withvat);
const b = withvat.map((u) => u-10);
console.log(b);
