const marks = [
  [80, 90, 70], // Student 0
  [60, 75, 85], // Student 1
  [95, 100, 90] // Student 2
];

const avg = marks.map((u) =>
{
  const sum = u.reduce((sum,item) => sum + item , 0);
  return sum/u.length;
});

console.log(avg)
