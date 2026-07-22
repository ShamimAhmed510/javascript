
//// reduce — boil an array down to one value 
const bill = [120, 80, 300];
const sm = bill.reduce((sum , u) => sum+u, 0);
console.log(sm);