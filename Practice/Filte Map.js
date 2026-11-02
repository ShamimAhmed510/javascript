const students = [
  { name: "Asha", cgpa: 3.7 },
  { name: "Rafi", cgpa: 3.2 },
  { name: "Mim", cgpa: 3.9 },
];

const ans = students.filter((s) => s.cgpa >= 3.5).map((s)=> {
    return `${s.name} cgpa ${s.cgpa}`;
});
console.log(ans);

// let sum = 0;
// for(let i=0; i<ans.length; i++)
// {
//   sum+=ans[i];
// }

//  console.log(sum/ans.length);