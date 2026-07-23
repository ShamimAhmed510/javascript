const std = [
  { name: "Shamim", cg: 2.0 },
  { name: "Abir", cg: 3.0 },
  { name: "Tarek", cg: 4.0 },
  { name: "Sakib", cg: 1.0 }
];

const a = std.some((p) => {
  p.cg >= 3 ;
});

console.log("If anyone avobe 3 :" + a);

const b = std.every((p) => {
  p.cg >= 2;
});

console.log("If anyone Passing :" + b);

