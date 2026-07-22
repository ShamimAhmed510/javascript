// //// 2. Use map to convert an array of taka amounts into strings like '450 BDT'.

const arr = [150 , 250, 350, 450,550];
const str = arr.map((p) => `${p} BDT`);
console.log(str);