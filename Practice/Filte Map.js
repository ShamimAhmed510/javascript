const students = [
  { name: "Asha", cgpa: 3.7 },
  { name: "Rafi", cgpa: 3.2 },
  { name: "Mim", cgpa: 3.9 },
];

const ans = students.filter((s) => s.cgpa >= 3.8).map((s)=> s.name);
console.log(ans);

for(let i=0; i<ans.length; i++)
{
  ans[i] = ans[i].toLowerCase();
}
console.log(ans);